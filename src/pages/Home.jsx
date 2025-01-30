import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { Link } from 'react-router-dom';
import GameLifeTime from '../components/GameLifeTime';

const Home = () => {
    const games = useLoaderData();
    return (
        <div>
        <div className="carousel w-full max-h-[900px] my-5 relative">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJrGkQMvOdqe69PfgiTFgVQBkQSPsWkKjEQ&s"
                    className="w-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl md:text-6xl font-bold font-['Limelight'] tracking-wider drop-shadow-[2px_2px_8px_rgba(0,0,0,0.75)] border-4 border-white p-4">
                        Lets Chill
                    </h2>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="data:image/jpeg;base64,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"
                    className="w-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl md:text-6xl font-bold font-['Limelight'] tracking-wider drop-shadow-[2px_2px_8px_rgba(0,0,0,0.75)] border-4 border-white p-4">
                        Kills should be STYLISH
                    </h2>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqZKT87Dcxz79Ii6MPDTmUyyGgmJwKvSzGw&s"
                    className="w-full object-cover object-bottom" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl md:text-6xl font-bold font-['Limelight'] tracking-wider drop-shadow-[2px_2px_8px_rgba(0,0,0,0.75)] border-4 border-white p-4">
                        Yes, THE VICYORY POSE
                    </h2>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jvtBjXCvvDRbcbL4VrWdPL7GZKYJgjnmaQ&s"
                    className="w-full object-cover object-top" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-4xl md:text-6xl font-bold font-['Limelight'] tracking-wider drop-shadow-[2px_2px_8px_rgba(0,0,0,0.75)] border-4 border-white p-4">
                        Live that life
                    </h2>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

        {/* Feature Movie */}
        <div className=''>
            <h2 className="text-center text-3xl pt-10 pb-10  font-bold">Highest rated games</h2>
            {/* mapping the movies */}
            <div className='grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-4 lg:mx-20 md:mx-20 sm-mx-10 ' >
                {
                    games.map(game => {
                        return <GameCard key={game._id} {...game} />
                    })
                }
            </div>

            <Link to='/allgames'>
                <button className='btn btn-primary mx-auto flex mt-10'>
                    See All Games
                </button>
            </Link>

        </div>

        <div className='max-w-6xl mx-auto mt-32'>
            <GameLifeTime></GameLifeTime>
        </div>

        <div className="bg-base-200 p-6 rounded-lg my-8 text-center">
            <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-4">Subscribe to our newsletter for the latest games and updates.</p>
            <form className="flex justify-center gap-2">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-2/3 md:w-1/3"
                />
                <button className="btn btn-primary">Subscribe</button>
            </form>
        </div>


    </div>
);
};


export default Home;