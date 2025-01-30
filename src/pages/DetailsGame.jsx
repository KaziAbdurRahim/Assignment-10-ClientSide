import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import GameCard from '../components/GameCard';
import GameDetails from '../components/GameDetails';


const DetailsGame = () => {
    const game = useLoaderData();
    return (
        <div className='mb-32'>
        <h2 className='text-center my-10 text-3xl font-bold'>Games Details</h2>
        <GameDetails {...game}></GameDetails>
        
        <Link to='/allgames'>
        <button className='btn btn-primary mx-auto flex mt-10'>
            All Games
        </button>
        </Link>
        
    </div>
);
};

export default DetailsGame;