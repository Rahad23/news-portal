import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../categoryCard/CategoryCard';

const Category = () => {
    const category = useLoaderData();

    return (
        <div className='mt-6'>
            
            {/* <h1>Category page {category.length}</h1> */}
            {
                category.map(news=> <CategoryCard key={news.id} news={news}></CategoryCard>)
            }
        </div>
    );
};

export default Category;