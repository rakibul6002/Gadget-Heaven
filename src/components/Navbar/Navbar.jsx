import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline,IoMenu,IoClose  } from "react-icons/io5";
import { TbHeart } from "react-icons/tb";
import { menuItems } from '../../utilites/data';


export default function Navbar() {

    const location = useLocation();
 
    const navColor = ()=>{
        switch (location.pathname){
            case '/':
             return 'bg-[#9538E2] text-white ';
            case '/dashboard':
            return 'bg-white text-black';  
            default:
            return 'bg-white text-black'; 
        }
    }

    const [open, setOpen] = useState(false);
    
     
    
  return (
    <div className=''>
        <div className={`flex items-center justify-between  p-3 ${navColor()} `}>
            <div className='flex items-center gap-5'>
                <div>
                    <div onClick={()=> setOpen(!open)} className='md:hidden text-2xl'>
                            {
                                open === true?<IoClose/> :<IoMenu/>
                            }
                    </div>
                    <div className={`flex flex-col items-center gap-5 font-bold text-xs absolute shadow-lg p-6 rounded-lg  duration-500 ${open?"top-12":'-top-60'} ${navColor()}`}>
                        {
                            menuItems.map((nav)=>(
                                <NavLink key={nav.id} to={nav.path}>{nav.name}</NavLink>
                            ))
                        }
                    </div>
                </div>
                    
                   
                    <Link to={'/'}><h1 className='text-xl font-bold'>Gadget Heaven</h1></Link>
            </div>
            <div className='hidden  md:flex items-center gap-5  font-bold text-xs duration-500'>
                {
                    menuItems.map((nav)=>(
                        <NavLink key={nav.id} className={({isActive}) =>isActive?"text-sky-500 underline underline-offset-2":""} to={nav.path}>{nav.name}</NavLink>
                    ))
                }
            </div>
            <div className='flex items-center justify-center gap-3 font-bold text-black'>
                <div className='bg-white rounded-full border border-black p-1 relative '>
                    <IoCartOutline className=''></IoCartOutline>
                    <span className='absolute -top-2 -right-1'></span>
                </div>
                <div className='bg-white rounded-full border border-black p-1 relative'>
                <TbHeart></TbHeart>
                <span className='absolute -top-2 -right-1'></span>
                </div>
                
            </div>
        </div>
    </div>
  )
}
