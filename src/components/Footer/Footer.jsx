import React from 'react'

export default function Footer() {
  return (
    <div className='py-20  bg-[#FFFFFF]'>
        <div className='flex flex-col items-center justify-center gap-2 mb-5'>
                <h1 className='text-2xl font-bold'>Gadget Heaven</h1>
                <p className='text-gray-500 text-sm'>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <hr />
        <div class="footer  text-b py-10 flex flex-col md:flex-row items-start justify-between md:px-20">
            <nav>
                <h6 class="text-xl font-bold text-black">Services</h6>
               <div className='flex flex-col gap-2 text-gray-500'>
                    <a class="link link-hover">Product Support</a>
                    <a class="link link-hover">Order Tracking</a>
                    <a class="link link-hover">Shipping & Delivery</a>
                    <a class="link link-hover">Returns</a>
               </div>
            </nav>
            <nav>
                <h6 class="text-xl font-bold text-black">Company</h6>
                <div className='flex flex-col gap-2 text-gray-500'>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Careers</a>
                    <a class="link link-hover">Contact</a>
                </div>
            </nav>
            <nav>
                <h6 class="text-xl font-bold text-black">Legal</h6>
                <div className='flex flex-col gap-2 text-gray-500'>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </nav>
        </div>
    </div>
  )
}
