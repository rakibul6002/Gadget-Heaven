import React from 'react';
import Baner from '../Baner/Baner';
import SideBar from '../SideBar/SideBar';


export default function Home() {
  
  
  
  return (
    <div className='-mt-16 '>
       
            <Baner></Baner>
        
            <div className='mt-60'>
                <SideBar></SideBar>
            </div>
        
    </div>
  )
}
