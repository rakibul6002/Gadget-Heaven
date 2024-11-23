import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Products from './components/Products/Products.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
      path: "/",
      element: <Home></Home>,
      loader: ()=> fetch('/categories.json'),
      },
      {
      path: "/dashboard",
      element: <DashBoard></DashBoard>,
      loader: ()=> fetch('/products.json')
      },
      {
      path: "/products",
      element: <Products></Products>,
      loader: ()=> fetch('/products.json')
      },
      {
      path: "/product/:id",
      element: <ProductDetails></ProductDetails>,
      loader: ()=> fetch('/products.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
