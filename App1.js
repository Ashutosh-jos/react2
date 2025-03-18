// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./src/components/Header";
// import Body from "./src/components/Body";
// import Body2 from "./src/components/Body2";
// import Error from "./src/components/Error";
// import About from "./src/components/About";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const Full=()=>(
//     <>
//     <Header/>
//     <Body/>
//     <Body2/>

//     </>

// );

// const appRouter=createBrowserRouter([
//     {
//         path:"/",
//         element:<Full/>,
//         errorElement:<Error/>
//     },
//     {
//         path:"/about",
//         element:<About/>,
//         errorElement:<Error/>
//     }
// ]);


// // const root=ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<RouterProvider router={appRouter}/>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);


import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Contact from "./src/components/Contact";
import Body2 from "./src/components/Body2";
import Error from "./src/components/Error";
import About from "./src/components/About";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { lazy,Suspense } from "react";
import { useContext } from "react";
import UserData from "./src/utils/UserData";
import { Provider } from "react-redux";
import appstore from "./src/utils/appstore";
import CartItem from "./src/components/CartItem";





// Lazy loading the Grocery component
const Grocery = lazy(() => import('./src/components/Grocery'));



// Full component as the main route layout
const Full = () => {
  const [username,setusername]=useState()

useEffect(()=>{
  const data={
name:"Ashika"
}
setusername(data.name)

},[])
  // console.log(username)
  
  return(
  <>
  {/* <UserData.Provider value={{loginuser:username}}> */}
  <Provider store={appstore}>
  <UserData.Provider value={{loginuser:username,setusername}}>
  {/* <UserData.Provider value={{loginuser:"elon musk"}}> */}
    <Header />
{/* </UserData.Provider> */}
    <Outlet/>
    </UserData.Provider>
    </Provider>
    {/* </UserData.Provider> */}
    {/* <Body />
    <Body2 /> */}
  </>
)};

// Define the router
const appRouter = createBrowserRouter([{
path:"/",
element:<Full/>,
children:[

  {
    path: "/",
    // element: <Body />,
    element:<Body2/>,
    
  },
  {
    path: "/about",
    element: <About name="ashu"/>,
    
  },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>
  },
  ,{
    path: "/Grocery",
    element:<Suspense fallback={<h3>Loading...</h3>}> <Grocery /></Suspense>,
    
  },
  {
    path: "/contact",
    element: <Contact />,
    
  },{
    path: "/cart",
    element: <CartItem />,
    
  },
],errorElement: <Error />,
}
]);

// Render the app with RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
