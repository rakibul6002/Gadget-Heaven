import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToStoredCartList, getStoredWishList, removeFromStoredWishList } from '../../utilites/addToDb';
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

export default function WishList() {
  const data =useLoaderData();
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    const productId = getStoredWishList();

    if (Array.isArray(data)) {
      const filteredProducts = data.filter(p => productId.includes(p.product_id));
      setProduct(filteredProducts);
    }
  },[data]);

  const handleRmvwish = (id)=>{
    removeFromStoredWishList(id);
    setProduct(prevProducts => prevProducts.filter(p => p.product_id !== id));
    toast.info('Product is deleted!', { position: "top-right", autoClose: 3000 });
    
    
  }
  const handleAddToCart = (product) => {
    addToStoredCartList(product.product_id);
    handleRmvwish(product.product_id);
    toast.success('Product added to cart!', { position: "top-right", autoClose: 3000 });


  };

  return (
    <div>
      <div className='mx-10 mt-3 text-xl font-bold'>Wish List</div>
      {product.map((p) => (
        <div key={p.product_id} className="flex justify-between gap-4 bg-white m-5 rounded-xl">
          <div className='md:w-1/12'>
            <img className="w-24 rounded-xl" src={p.product_image || '/path/to/fallback-image.jpg'} alt="Product image" />
          </div>
          <div className="py-3 md:w-10/12">
            <h1 className="text-xl font-bold">{p.product_title}</h1>
            <p className="text-sm text-gray-400">{p.description || 'No description available.'}</p>
            <h4 className="text-sm font-bold">Price: {p.price}$</h4>
          </div>
          <div  className='flex flex-col items-center gap-5 md:w-2/12 mt-3 '>
              <button onClick={()=>handleRmvwish(p.product_id)} className='w-4 bg-white border text-red-900 border-red-900 rounded-full'><RxCross2/></button>
              <div><button  onClick={() => handleAddToCart(p)} className='bg-[#9538E2] px-4 py-1 rounded-full text-white'>Add to cart</button></div>
          </div>
          
        </div>
        
      ))}
      <ToastContainer/>
    </div>
  )
}
