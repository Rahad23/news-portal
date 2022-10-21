import React, { useContext } from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../privateRoute/PrivateRoute';

const CategoryCard = ({news}) => {

    const {userDocument} = useContext(AuthContext);

    // console.log(news)
    const {image_url, details, total_view, title, category_id, author, rating, _id } = news;
    const { img, name, published_date }=author;
    //  console.log(_id);
    
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
            <p>{details.length > 250 ? details.slice(0, 250)+"..." : details} 
            
            <Link to={`/news/${_id}`} className="bg-green-700 text-center cursor-pointer py-0 px-1 rounded-lg w-[20%] text-white">Read-More</Link>
                
            </p>
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

export default CategoryCard;