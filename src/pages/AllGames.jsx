import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import GameCard from '../components/GameCard';
import Loading from '../components/Loading';

const AllGames = () => {
    const games = useLoaderData(); // All games initially loaded
    const [searchQuery, setSearchQuery] = useState(''); // User's search input
    const [searchedGames, setSearchedGames] = useState([]); // games from search
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [error, setError] = useState(''); // Error state

    const handleSearch = async () => {
        if (!searchQuery.trim()) return; // Ignore empty searches
        setIsLoading(true);
        setError('');
        try {
            const response = await fetch(`https://asst-server.vercel.app/searchgames/${searchQuery}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setSearchedGames(data); // Update with search results
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
        <div className='mb-20 mt-5'>
            {/* Search Section */}
            <div className='mx-10'>
               
                <div className="flex ">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="grow input "
                        placeholder="Search by title"
                    />
                    <button
                        onClick={handleSearch}
                        className="btn btn-primary"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Searching...' : 'Search'}
                    </button>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>

            {/* Searched games */}
            {searchedGames.length > 0 && (
                <div className='mt-10'>
                    <h3 className="text-xl font-semibold mb-4 text-center py-10">Searched Games</h3>
                    <div className='grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-4 lg:mx-20 md:mx-20 sm:mx-10'>
                        {searchedGames.map(game => (
                            <GameCard key={game._id} {...game} />
                        ))}
                    </div>
                </div>
            )}

            {/* All GAmes */}
            <div className='mt-10'>
                <h3 className="text-xl font-semibold mb-4 text-center py-10">All Games</h3>
                <div className='grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-4 lg:mx-20 md:mx-20 sm:mx-10'>
                    {games.map(game => (
                        <GameCard key={game._id} {...game} />
                    ))}
                  
                </div>
            </div>

            
        </div>
    </div>
);
};


export default AllGames;