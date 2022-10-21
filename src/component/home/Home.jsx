import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNewsCard from '../allNews/AllNewsCard';

const Home = () => {
    const allNews = useLoaderData();
    // console.log(allNews);
    return (
        <div>
            <h1 className='text-2xl font-bold text-black mb-5'>All News</h1>
            {
                allNews.map(news=> <AllNewsCard key={news._id} news={news}></AllNewsCard>)
            }
        </div>
    );
};

export default Home;