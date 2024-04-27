
import { useLoaderData, useParams } from "react-router-dom";

import PropTypes from 'prop-types';
import { FaDollarSign } from "react-icons/fa";


const CraftifyCardDetails = () => {

    // const {name, subcategory_Name, _id, description, price, rating, customization, photo, processing_time, stockStatus, } = singleCard;
    const Craftify = useLoaderData();
    // console.log(Craftify)

    const { id } = useParams();

    const CraftifyDetails = Craftify.find(item => item._id === id);
    // console.log(CraftifyDetails)


    return (


        <div className="hero min-h-screen bg-orange-300  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={CraftifyDetails?.photo} className="lg:max-w-2xl   rounded-lg shadow-2xl" />
                <div className="space-y-4 " >
                    <h1 className="lg:text-5xl font-bold">{CraftifyDetails?.item_name}</h1>
                    <p className=" text-left   first-letter: font-playfair font-bold "><span className="text-sm text-left ">Subcategory</span>: {CraftifyDetails?.subcategory_Name}</p>
                    <p className=" text-left    font-playfair font-bold">stockStatus: {CraftifyDetails?.stockStatus}</p>
                    <p className=" text-left    font-playfair font-bold">Description: {CraftifyDetails?.description}</p>
                    <p className="  text-left   font-playfair font-bold flex items-center"> <span>Price</span>: <span className="ml-3"><FaDollarSign /></span>{CraftifyDetails?.price}</p>
                    <button className="btn btn-secondary  ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default CraftifyCardDetails;


CraftifyCardDetails.propTypes = {
    singleCard: PropTypes.array,
}