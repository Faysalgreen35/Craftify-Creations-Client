import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

 

const PrivateRoutes = ({children}) => {

    const {user, loading}= useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return  <span className=" mt-6 text-center max-w-4xl loading loading-spinner text-error"></span>
       
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.array,
}