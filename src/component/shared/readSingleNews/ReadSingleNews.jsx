import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReadSingleNews = ({news}) => {
    // console.log(news);
    const {details, image_url, rating, title, total_view, category_id, author }= news;

    const {name, published_date, img} = author;

    return (
        <div>
             <div className="card mx-auto mb-7 w-[600px] bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
           <div className='flex justify-between'>
           <h2 className="card-title w-[80%] text-black mb-5">
            {title}
            </h2>
            <div className='flex items-center'>
             <FaEye className='text-black text-xl font-bold'></FaEye>
             <p className='ml-1 text-black'>{total_view ? total_view : 0}</p>
            </div>
            
           </div>
            <p className='mb-3'>{details}</p>
            <Link to={`/category/${category_id}`}>
            <span className='bg-lime-700 text-white p-1 rounded-lg'>Back-News</span>
            </Link>
            <div className="card-actions justify-between">
                <div className='mt-5'>
                    <span className='flex justify-center items-center'>
                        <FaStar className='mr-1 text-2xl text-orange-400 font-bold'></FaStar>
                        <p className='text-xl font-semibold'>{rating.number}</p>
                    </span>
                </div>
                <div className="flex justify-center items-center">
                <img src={img} className="rounded-full w-14" alt=''></img>
                <div>
                <p className='text-center mb-0 font-bold text-black'>AUTHOR</p>
                <p className='ml-3'>{name ? name : "Not found"}</p>
                </div>
                </div> 
            </div>
            <div>
               <p className='text-right'><span className='text-red-500 font-bold'>Publish:</span> {published_date}</p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ReadSingleNews;