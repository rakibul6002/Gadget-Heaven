import React from 'react';
import BannerImg from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';

export default function Baner() {
  return (
    <div className='bg-[#9538E2] rounded-lg '>
      <div className='relative'>
          <div className='pt-20 text-center '>
                <h1 className='text-white  text-3xl font-bold md:20  lg:mx-52'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='text-sm text-gray-200 mt-5 md:20  lg:mx-52'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link to={'/dashboard'}><button className=' rounded-full text-xs font-bold bg-white text-[#9538E2] mt-5 my-32 px-5 py-2 hover:bg-gray-700 hover:text-white duration-500'>Shop Now</button></Link>  
          </div>
          <div className=' h-[300px] bg-transparent border-2 border-gray-300 rounded-lg w-7/12   absolute left-20 md:left-52 -bottom-48'>
            <div className='  h-[270px] m-3 '>
                <img className='w-full h-full rounded-lg object-fill ' src={BannerImg} alt="Banner Image" />
            </div>
        </div>
      </div>
        
    </div>
  )
}
