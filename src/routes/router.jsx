import { createBrowserRouter } from "react-router-dom";
 
import Home from "../pages/Home/Home";  
import Root from "../layouts/Root";
import ErrorPage from "../layouts/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddCraftify from "../pages/AddCraftify/AddCraftify";
import PrivateRoutes from "./PrivateRoutes"; 
import CraftifyCardDetails from "../pages/Home/CraftifyCardDetails";
import MyArtCraftList from "../pages/MyArtCraftList/MyArtCraftList";
import UpdateCraftify from "../pages/UpdateCraftify/UpdateCraftify";
import AllArtCraftItems from "../pages/AllArtCraftItems/AllArtCraftItems";
import CategoryIn from "../pages/CategoryIn/CategoryIn";
import Subcategories from "../pages/Subcategories/Subcategories";
// import Subcategories from "../pages/Subcategories/Subcategories";

 

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () => Promise.all([
                    fetch('https://craftify-creations-server.vercel.app/craftify'),
                    fetch('https://craftify-creations-server.vercel.app/category')
                ]).then(responses => Promise.all(responses.map(response => response.json())))
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/add-item',
                element: 
                <PrivateRoutes> <AddCraftify></AddCraftify></PrivateRoutes>
            },
            {
                path:'/craftify/:id',
                element: <PrivateRoutes><CraftifyCardDetails></CraftifyCardDetails></PrivateRoutes>  ,
                loader: () => fetch('https://craftify-creations-server.vercel.app/craftify'),
            },
            {
                path: '/my-cart',
                element: <PrivateRoutes><MyArtCraftList></MyArtCraftList></PrivateRoutes>
            },
            {
                path: '/all-items',
                element:  <AllArtCraftItems></AllArtCraftItems>,
                loader: () => fetch('https://craftify-creations-server.vercel.app/craftify')
            },
            {
                path:"/my-cart/updateCraftify/:id",
                element:<UpdateCraftify></UpdateCraftify>,
                loader: ({params}) => fetch(`https://craftify-creations-server.vercel.app/singleCard/${params.id}`)
              },
              {
                path: '/categories',
                element:<CategoryIn></CategoryIn>,
                
              },
              {
                path: "category/:subcategory_Name",
                element: <Subcategories></Subcategories>,
                loader: () => fetch(`https://craftify-creations-server.vercel.app/craftify`)

              },
               
         ]
    }
 ])

 export default router;
 