import { createBrowserRouter } from "react-router-dom";
 
import Home from "../pages/Home/Home";  
import Root from "../layouts/Root";
import ErrorPage from "../layouts/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddCraftify from "../pages/AddCraftify/AddCraftify";
import PrivateRoutes from "./PrivateRoutes"; 
import CraftifyCardDetails from "../pages/Home/CraftifyCardDetails";

 

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/craftify')

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
                element: <CraftifyCardDetails></CraftifyCardDetails> ,
                loader: () => fetch('http://localhost:5000/craftify'),
            },

        ]
    }
 ])

 export default router;
 