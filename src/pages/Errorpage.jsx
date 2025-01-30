import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col relative'>
            <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_C6BmLz-uUUfZfuRbFepXlU0frH8Xx_aPrA&s" alt="" />
            <div className='btn bg-red-700 absolute top-2/3 w-44'>
            <Link to="/"><h2 className='text-3xl'>Go Back</h2></Link>
            </div>
        </div>
    );
};

export default Errorpage;