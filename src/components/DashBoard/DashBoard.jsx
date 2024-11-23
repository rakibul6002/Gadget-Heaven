import { useState } from "react";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { Helmet } from "react-helmet";


export default function DashBoard() {


  const [isActive, setIsActive] = useState({
    cart: true,
    status:"Cart"
  });

  const handleIsActive = (status) =>{
    if(status === "cart"){
      setIsActive({
          cart: true,
          status:"Cart"
      })
      
    }
    else{
      setIsActive({
        cart: false,
        status:"wishlist"
      })
    }
  }
  
  
  return (
    <div>
      <Helmet>
        <title>Dashboard || Gadget Heaven</title>
      </Helmet>
        <div className="bg-[#9538E2] text-center">
            <div>
              <h1 className="text-2xl font-bold pt-8 text-white">Dashboard</h1>
              <p className="text-sm text-white  mt-3 md:mx-52">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
              </p>
            </div>
            <div className="flex items-center gap-3 justify-center py-5 ">
              <button onClick={()=>handleIsActive('cart')} className={` ${isActive.cart?"bg-gray-200 text-[#9538E2]":"bg-transparent text-white"} font-bold px-6 py-2 rounded-full border border-white`}>Cart</button>
              <button onClick={()=>handleIsActive('wishlist')} className={` ${isActive.cart?"bg-transparent text-white":"bg-gray-200 text-[#9538E2]"} font-bold px-6 py-2 rounded-full border border-white`}>Wishlist</button>
            </div>
        </div>
        {
          isActive.cart?
          <Cart></Cart>:
          <WishList></WishList>
        }
    </div>
  )
}
