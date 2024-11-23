import React from 'react'
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom'

export default function Products() {
    const data = useLoaderData();
  return (
    <div className='bg-white'>
        <Helmet>
            <title>Product || Gadget Heaven</title>
        </Helmet>
        <div >
        <div className="bg-[#9538E2] text-center">
            <div>
              <h1 className="text-2xl font-bold pt-8 text-white uppercase">All Product</h1>
              <p className="text-sm text-white  mt-3 md:mx-52 pb-10">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
              </p>
            </div>
            
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {data && data.length > 0 ? (
                    data.map((p) => (
                        <div key={p.product_id} className="border rounded-lg shadow-lg p-3 bg-white">
                            <img className='rounded-xl shadow-lg h-[200px]' src={p.product_image} alt="" />
                            <h1 className='font-bold text-sm mt-4'>{p.product_title}</h1>
                            <p className='text-gray-500 font-bold'>Price: {p.price}$</p>
                            <Link to={`/product/${p.product_id}`}>
                            <button className='text-xs border-2 border-[#9538E2] text-[#9538E2] rounded-full px-4 py-1 mb-3 mt-3 w-full'>View Details</button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No products available.</p>
                )}
            </div>
        </div>
    </div>
  )
}
