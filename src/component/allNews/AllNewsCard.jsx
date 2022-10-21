import React, { useContext } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../privateRoute/PrivateRoute';

const AllNewsCard = ({news}) => {
    const {userDocument} = useContext(AuthContext);
    // console.log(news);
    const { image_url, title, total_view, details, _id }=news;
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
             <p className='ml-1 text-black'>{total_view}</p>
            </div>
            
           </div>
            <p>{details.length > 250 ? details.slice(0, 250)+"..." : details} 
            
               <Link to={`/news/${_id}`} className="bg-green-700 text-center cursor-pointer py-0 px-1 rounded-lg w-[20%] text-white">Read-More</Link>

            
            </p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">News</div> 
            <div className="badge badge-outline">News-portal</div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default AllNewsCard;