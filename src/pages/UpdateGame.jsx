import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const UpdateGame = () => {
    const { poster, title, genres, duration, year, rating, summary, _id } = useLoaderData();
    const [gameRating, setGameRating] = useState(rating);
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRating = (rate) => {
        setGameRating(rate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const poster = form.poster.value;
        const title = form.title.value;
        const genres = Array.from(form.genres.selectedOptions).map((option) => option.value);
        const duration = form.duration.value;
        const year = form.year.value;
        const summary = form.summary.value;

        // Validation
        if (!poster.startsWith("http://") && !poster.startsWith("https://")) {
            setFormError("The games Poster must be a valid link.");
            return;
        }
        if (!title || title.length < 2) {
            setFormError("The games Title must have at least 2 characters.");
            return;
        }
        if (genres.length === 0) {
            setFormError("Please select at least one genre.");
            return;
        }
        if (!duration || duration <= 60) {
            setFormError("The Duration must be greater than 60 minutes.");
            return;
        }
        if (!year || year <= 1800 || year > new Date().getFullYear() + 1) {
            setFormError("Please enter a valid year.");
            return;
        }
        if (gameRating === 0) {
            setFormError("Please select a rating.");
            return;
        }
        if (!summary || summary.length < 10) {
            setFormError("The Summary must have at least 10 characters.");
            return;
        }

        setFormError("");

        const updatedGame = { poster, title, genres, duration, year, rating: gameRating, summary };
        // console.log(updatedMovie);
        setLoading(true);
        fetch(`https://asst-server.vercel.app/updategames/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedGame),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setLoading(false);
                if (data.matchedCount) {
                    Swal.fire({
                        title: "Game Updated Successfully!",
                        icon: "success",
                        text: `${title} has been updated.`,
                        confirmButtonText: "OK",
                    });
                } else {
                    Swal.fire({
                        title: "Update Failed",
                        icon: "error",
                        text: data.message || "There was an issue updating the game. Please try again later.",
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error",
                    icon: "error",
                    text: `An error occurred: ${error.message}`,
                });
            });
    };

    if (loading) {
        return (
           <Loading></Loading>
        );
    }

    return (
        <div className="min-h-[calc(100vh-264px)] mt-5">
            <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
                <div>
                    <h2 className="text-center text-3xl pt-4 font-bold">Update Game</h2>
                </div>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control flex justify-between">
                        <label className="label">
                            <span className="label-text">Game Poster</span>
                        </label>
                        <input
                            type="text"
                            name="poster"
                            placeholder="Image URL"
                            defaultValue={poster}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control flex justify-between">
                        <label className="label">
                            <span className="label-text">Game Title</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            defaultValue={title}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control flex justify-between">
                        <label className="label">
                            <span className="label-text">Genre (multiple selection)</span>
                        </label>
                        <select
                            name="genres"
                            className="select select-bordered"
                            required
                            multiple
                            defaultValue={genres}
                        >
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="horror">Horror</option>
                            <option value="action">Action</option>
                            <option value="romance">Romance</option>
                            <option value="thriller">Thriller</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="sci-fi">Sci-Fi</option>
                            <option value="animation">Animation</option>
                        </select>
                    </div>
                    <div className="form-control flex justify-between">
                        <label className="label">
                            <span className="label-text">Least Clear Duration (in minutes)</span>
                        </label>
                        <input
                            type="number"
                            name="duration"
                            placeholder="Duration"
                            defaultValue={duration}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control flex justify-between">
                        <label className="label">
                            <span className="label-text">Release Year</span>
                        </label>
                        <input
                            type="number"
                            name="year"
                            placeholder="Release Year"
                            defaultValue={year}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control flex justify-between">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <div className="flex">
                            <Rating
                                onClick={handleRating}
                                initialValue={gameRating}
                                SVGclassName={"inline-block"}
                                ratingValue={gameRating}
                                allowFraction={true}
                                transition={true}
                                showTooltip
                                tooltipArray={[
                                    "Terrible",
                                    "Terrible+",
                                    "Bad",
                                    "Bad+",
                                    "Average",
                                    "Average+",
                                    "Great",
                                    "Great+",
                                    "Awesome",
                                    "Awesome+",
                                ]}
                            />
                        </div>
                    </div>
                    <div className="form-control flex justify-between">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>
                        <textarea
                            name="summary"
                            placeholder="Short summary of the movie"
                            defaultValue={summary}
                            className="textarea textarea-bordered"
                            required
                        ></textarea>
                    </div>
                    {formError && <div className="text-red-600 mt-2 font-semibold">{formError}</div>}
                    <div className="form-control mt-6 w-40 lg:w-60 mx-auto">
                        <button className="btn btn-primary">Update Game</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateGame;
