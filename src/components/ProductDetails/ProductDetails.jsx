import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { addToStoredCartList, addToStoredWishtList } from '../../utilites/addToDb';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import ReactStars from 'react-rating-stars-component';

export default function ProductDetails() {
    const data = useLoaderData();
    const [products, setProducts]= useState({});
    const {id} = useParams();

    useEffect(()=>{
        const product = data.find((p) => p.product_id == id)
        setProducts(product)
    },[data, id]);
    const {product_id,product_title,product_image,category,price,description,specification,availability,rating} = products;

    const handleCart = (id) =>{
      addToStoredCartList(id);
      toast.success('Product added to cart!', { position: "top-right", autoClose: 3000 });
      
    }
    const handleWishList = (id) =>{
      addToStoredWishtList(id);
      toast.success('Product added to wishlist!', { position: "top-right", autoClose: 3000 });
      
    };
  return (

    <div className='relative '>
      <Helmet>
            <title>Product Details || Gadget Heaven</title>
        </Helmet>
        <div className='bg-[#9538E2] text-center pt-10'>
            <h1 className='text-2xl text-white font-bold mb-3'>Product Details</h1>
            <p className='text-white text-sm 
            md:mx-52 pb-44'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
        <div className='h-[550px] md:h-[292px]  bg-white border-2 border-white rounded-2xl w-11/12 md:w-7/12    absolute left-4 md:left-52 -bottom-96 md:-bottom-32'>
            <div className='flex flex-col md:flex-row items-center '>
                <div>
                      <img className='w-48 md:h-[240px] my-5 mx-5   rounded-2xl' src={product_image} alt="" />
                </div>
                <div className='w-4/6 p-3'>
                    <h1 className='text-xl font-bold'>{product_title}</h1>
                    <p className='text-sm font-bold'>Price: {price}$</p>
                    <div className='text-xs  border border-gray-600 text-green-600 bg-gray-300 rounded-full w-[70px] px-3 mt-1'>{availability}</div>
                    <p className='text-xs text-gray-600 mt-1'>{description}</p>
                    <h1 className='font-bold'>Specification:</h1>
                    <p className='text-xs'>{specification}</p>
                  
                        
                            <div className="font-bold mt-2 flex items-center">
                            <p className="mr-2">Rating:</p>
                            <ReactStars
                                count={5}
                                value={rating}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />                        
                            <span className="bg-gray-400 rounded-full ml-3 p-1">{rating}</span>
                        </div>
                    <div className='flex items-center gap-4 mt-1 '>
                      <button onClick={()=>handleCart(product_id)} className='text-sm bg-[#9538E2] rounded-full px-4 py-1'>Add to Cart

                      </button>
                      <button onClick={()=>handleWishList(product_id)} className='border border-black rounded-full p-1'><CiHeart/></button>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
