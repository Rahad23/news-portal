import buttonGroup from './../../buttonGroup/ButtonGroup';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Right = () => {
    const [categorys, setCategorys] = useState([]);
// console.log(categorys);
    useEffect(()=>{
         fetch('http://localhost:5000/api')
        .then(res=> res.json())
        .then(data=> setCategorys(data))
    },[])

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4 text-black'>All Category</h1>
            <ul>
            {
                categorys.map(category=> <li key={category.id} className='mb-1'><Link to={`/category/${category.id}`}>{category.name}</Link></li>)
            }
            </ul>

        </div>
    );
};

export default Right;