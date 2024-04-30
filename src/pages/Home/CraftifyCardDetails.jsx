
import { Link, useLoaderData, useParams } from "react-router-dom";

import PropTypes from 'prop-types';
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineStarHalf, MdOutlineStarRate } from "react-icons/md";


const CraftifyCardDetails = () => {

    //  const newcraftify = { item_name, subcategory_Name, description, price, rating, customization, photo, processing_time, stockStatus, email, user_name };
    // console.log(newcraftify);
    const Craftify = useLoaderData();
    // console.log(Craftify)

    const { id } = useParams();

    const CraftifyDetails = Craftify.find(item => item._id === id);
    // console.log(CraftifyDetails)
    // Function to create an array representing the rating
    const createRatingArray = (rating) => {
        const wholeStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        let ratingArray = Array.from({ length: wholeStars }, (_, idx) => idx + 1);

        if (hasHalfStar) {
            ratingArray.push(0.5);
        }

        return ratingArray;
    };

    return (


        <div className="hero min-h-screen bg-orange-300  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={CraftifyDetails?.photo} className="lg:max-w-2xl lg:h-[500px]  rounded-lg shadow-2xl" />
                <div className="space-y-4 " >
                    <h1 className="lg:text-5xl font-bold">{CraftifyDetails?.item_name}</h1>
                    <p className=" text-left   first-letter: font-playfair font-bold "><span className="text-sm text-left ">Subcategory</span>: {CraftifyDetails?.subcategory_Name}</p>
                    <p className=" text-left    font-playfair font-bold">stockStatus: {CraftifyDetails?.stockStatus}</p>
                    <p className=" text-left    font-playfair font-bold">Description: {CraftifyDetails?.description}</p>
                    <p className=" text-left    font-playfair font-bold">Customization: {CraftifyDetails?.customization}</p>
                    <p className=" text-left    font-playfair font-bold">Processin Time: {CraftifyDetails?.processing_time}</p>
                    {/* <p className=" text-left    font-playfair font-bold">Rating  : {CraftifyDetails?.rating}</p>
                     */}

                    <ul className="flex mb-2 mx-auto "><span className=" text-left    font-playfair font-bold">Rating:</span>
                        {/* Display rating */}
                        {createRatingArray(CraftifyDetails.rating).map((star, index) => (
                            <li key={index} className="text-yellow-900 text-3xl">
                                {star === 0.5 ? (
                                    <MdOutlineStarHalf className="w-6 h-6" />
                                ) : (
                                    <MdOutlineStarRate className="w-6 h-6" />


                                )}
                            </li>
                        ))}
                    </ul>
                    <p className="  text-left   font-playfair font-bold flex items-center"> <span>Price</span>: <span className="ml-3"><FaDollarSign /></span>{CraftifyDetails?.price}</p>
                    <button className="btn btn-secondary  ">Order Now</button>
                    <Link to='/'>  <button className="btn btn-secondary  ">Go to Home</button></Link>
                   
                </div>
            </div>
        </div>
    );
};

export default CraftifyCardDetails;


CraftifyCardDetails.propTypes = {
    singleCard: PropTypes.array,
}