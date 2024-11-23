import { Link, useRouteError, useLocation } from "react-router-dom";
import oops from '../assets/7188150.png';
import { Helmet } from "react-helmet";
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'

export default function ErrorPage() {
  
  const error = useRouteError();
  const location = useLocation();

  const routeName = location.pathname.split("/").filter(Boolean).join(" ") || "Home";

  return (
   <div className="max-w-screen-lg mx-auto bg-gray-300">
    <div className='sticky top-0 z-10  '>
        <Navbar></Navbar>
    </div>
     <Helmet>
        <title>Not Found Page</title>
      </Helmet>
      <div className="bg-[#9538E2] text-center">
            <div>
              <h1 className="text-2xl font-bold pt-8 text-white uppercase">{routeName}</h1>
              <p className="text-sm text-white  mt-3 md:mx-52 pb-10">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
              </p>
            </div>
            
        </div>
       <div className="w-full h-[300px] flex flex-col items-center justify-center gap-3 bg-gray-600">
     
      
      <img className="w-[100px]" src={oops} alt="Oops!" />
      <h1 className="text-4xl font-bold">{error?.status}</h1>
      <p className="text-2xl font-bold uppercase ">{routeName} page is not available.</p>

      
    </div>
    <Footer></Footer>
   </div>
  );
}
