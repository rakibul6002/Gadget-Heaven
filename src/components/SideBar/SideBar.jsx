import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import oops from '../../assets/7188150.png';

const SideBar = () => {
  const categories = useLoaderData() || [];
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('./products.json');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredProducts = selectedCategory === 'All Products'
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <div className='text-center my-10'>
        <h1 className='text-3xl font-bold text-black'>Explore Cutting-Edge Gadgets</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-5 mb-10'>
        <div className='bg-white  md:mx-10 rounded-lg px-2 md:px-5 py-4 md:h-[350px] w-11/12 mx-auto md:w-3/12'>
          <div className='grid grid-cols-2 md:grid-cols-1 gap-2 '>
            <NavLink 
              className={`flex flex-col px-4 py-1 rounded-full ${selectedCategory === 'All Products' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`} 
              onClick={() => handleCategoryChange('All Products')}
            >
              All Products
            </NavLink>
            {Array.isArray(categories) && categories.map((category) => (
              <NavLink 
                key={category.id}
                className={`flex flex-col px-4 py-1 rounded-full mt-2 ${selectedCategory === category.name ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                 
                onClick={() => handleCategoryChange(category.name)}
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className='w-9/12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 gap-5'>
            {filteredProducts.length === 0 ? (
              <div className='bg-white col-span-full rounded-2xl'>
                <img className='w-[100px] mx-auto mt-20' src={oops} alt="Oops Image" />
                <h1 className='text-center text-3xl font-bold mt-5 mb-16'>No Data Available</h1>
              </div>
            ) : (
              filteredProducts.slice(0, 6).map((item) => (
                <div key={item.id} className='bg-white rounded-lg'>
                  <img className='w-full shadow-lg p-4 rounded-lg h-[200px]' src={item.product_image} alt="Product Image" />
                  <h1 className='text-xs font-bold my-3 mx-2'>{item.product_title}</h1>
                  <h4 className='text-xs text-gray-500 font-bold my-3 mx-2'>Price: {item.price}$</h4>
                  <div className='text-center'>
                    <Link to={`/product/${item.product_id}`}>
                      <button className='text-xs border-2 border-[#9538E2] text-[#9538E2] rounded-full px-4 py-1 mb-3'>View Details</button>
                    </Link>
                  </div>
                </div> 
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
