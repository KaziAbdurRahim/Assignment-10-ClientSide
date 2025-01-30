import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FavCard from '../components/FavCard';

const FavGames = () => {
    const loadedgames = useLoaderData();
   
    const [games, setGames] = useState(loadedgames);
    const handleRemoveGame = (id) => {
        const newGames = games.filter(game => game._id !== id);
        setGames(newGames);
    }

    return (
        <div>
            <div className='mb-20 mt-5'>
                <h2 className="text-center text-3xl pt-10 pb-10 font-bold">Favorite Game</h2>
                {/* Mapping the games */}
                <div className='grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-4 lg:mx-20 md:mx-20 sm-mx-10'>
                    {
                        games.map(game => {
                            return <FavCard key={game._id} {...game} handleRemoveGame={handleRemoveGame} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FavGames;
