 
import { Outlet } from "react-router-dom"; 
import Header from "../shared/Navbar/Header";
import Footer from "../shared/Footer";

 

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto dark:bg-gray-800 dark:text-white"> 
             <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default Root;