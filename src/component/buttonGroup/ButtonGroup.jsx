import React from 'react';
import { FaFacebook, FaTwitch, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const ButtonGroup = () => {
    return (
        <div className='mt-4'>
        <div className="btn-group btn-group-vertical w-full">
            <button className="btn bg-[#dfe6e9] border-none justify-start px-7 mb-1 text-slate-900 hover:text-slate-900 hover:bg-[#9bc0cf]"><FaFacebook className='mr-2 text-2xl' /> FaceBook</button>
            <button className="btn btn bg-[#dfe6e9] border-none justify-start px-7 mb-1 text-slate-900 hover:text-slate-900 hover:bg-[#9bc0cf]"><FaYoutube className='mr-2 text-2xl'></FaYoutube >Youtube</button>
            <button className="btn bg-[#dfe6e9] border-none justify-start px-7 mb-1 text-slate-900 hover:text-slate-900 hover:bg-[#9bc0cf]"><FaWhatsapp className='mr-2 text-2xl'></FaWhatsapp>WhatsApp</button>
            <button className="btn bg-[#dfe6e9] border-none justify-start px-7 mb-1 text-slate-900 hover:text-slate-900 hover:bg-[#9bc0cf]"><FaTwitter className='mr-2 text-2xl'></FaTwitter>Twitter</button>
            <button className="btn bg-[#dfe6e9] border-none justify-start px-7 mb-1 text-slate-900 hover:text-slate-900 hover:bg-[#9bc0cf]"><FaTwitch className='mr-2 text-2xl'></FaTwitch>Twitter</button>
        </div>
        </div>
    );
};

export default ButtonGroup;