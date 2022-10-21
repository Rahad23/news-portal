import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../privateRoute/PrivateRoute';
import ReadSingleNews from '../shared/readSingleNews/ReadSingleNews';

const Newes = () => {
    const getNews = useLoaderData();
    // console.log(getNews);
    return (
        <div>
            <ReadSingleNews key={getNews._id} news={getNews}></ReadSingleNews>
        </div>
    );
};

export default Newes;