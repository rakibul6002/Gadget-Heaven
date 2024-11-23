import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList, removeCartList, removeFromStoredCartList } from '../../utilites/addToDb';
import { RxCross2 } from 'react-icons/rx';
import { BiSliderAlt } from "react-icons/bi";
import fav from '../../assets/Group.png';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


export default function Cart() {

  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  const [isDescending, setIsDescending] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const storedList = getStoredCartList();
    
    
    if (Array.isArray(data)) {
      const filteredProducts = data.filter(p => storedList.includes(p.product_id));
      setProducts(filteredProducts);
    }
  }, [data]);

  const handleRmvCart = (id)=>{
    removeFromStoredCartList(id)
    setProducts(prevProducts => prevProducts.filter(p => p.product_id !== id));
    toast.info('Product is deleted!', { position: "top-right", autoClose: 3000 });
    
    
  }

  const handlePurchase = () => {
    const purchaseTotalCost = products.reduce((sum, product) => sum + product.price, 0);
    setTotalCost(purchaseTotalCost);
    setShowModal(true); 
    removeCartList(); 
    setProducts([]); 
    setIsPurchased(true);
  };
  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => {
      return isDescending ? b.price - a.price : a.price - b.price;
    });
    setProducts(sortedProducts);
    setIsDescending(!isDescending); 
  };
  
const handleCloseModal = () => {
  setShowModal(false);
  navigate('/'); 
};
const totalCostCalculated = products.reduce((sum, product) => sum + product.price, 0);
  return (
    <div>
      <div className='flex justify-between mx-10 mt-3'>
        <div className='text-xl font-bold'>Cart</div>
        <div className='flex gap-10'>
          <div className='text-xl font-bold'>Total cost: {totalCostCalculated}$</div>
          <div>
            <button onClick={handleSort} className='border-2 border-[#9538E2] px-4 py-1 rounded-full flex items-center gap-2'><div>Sort by Price </div><div className='rotate-90'><BiSliderAlt/></div>
            </button>
            
          </div>
          <div><button onClick={handlePurchase} className='bg-gradient-to-t from-pink-500 to-orange-500 hover:from-teal-400 hover:to-blue-500 px-4 py-1 rounded-full text-white' disabled={totalCostCalculated === 0}>Purchase</button></div>
        </div>
      </div>
      {products.map((p) => (
        <div key={p.product_id} className="flex gap-4 bg-white m-5 rounded-xl">
          <div className='md:w-1/12'>
            <img className="w-24 rounded-xl" src={p.product_image || '/path/to/fallback-image.jpg'} alt="Product image" />
          </div>
          <div className="py-3 md:w-10/12">
            <h1 className="text-xl font-bold">{p.product_title}</h1>
            <p className="text-sm text-gray-400">{p.description || 'No description available.'}</p>
            <h4 className="text-sm font-bold">Price: {p.price}$</h4>
          </div>
          <div  className='md:w-1/12 mt-3 '>
              <button onClick={()=>handleRmvCart(p.product_id)} className='bg-white border text-red-900 border-red-900 rounded-full'><RxCross2/></button>
          </div>
        </div>
      ))}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg max-w-sm w-full">
            <div>
              <img className='w-10' src={fav} alt="" />
            </div>
            <h2 className="text-2xl font-bold mb-4 mt-3">Payment Successfully</h2>
            <p className="mb-4 text-gray-400">Thanks for purchasing.</p>
            <p className="mb-4 text-gray-400">Total:{totalCost}$</p>
            <button onClick={handleCloseModal} className="bg-[#9538E2] px-4 py-2 rounded-full text-white w-full">Close</button>
          </div>
        </div>
      )}
      <ToastContainer/>
    </div>
  );
}
