
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineStarHalf, MdOutlineStarRate } from "react-icons/md";

const CraftifyCard = ({ singleCard }) => {

  const { item_name, subcategory_Name, _id, price, rating, photo, stockStatus } = singleCard;
  // const ratingArray = Array.from({ length: rating }, (_, idx) => idx + 1);
  
    // Function to create an array representing the rating
    const createRatingArray = (rating) => {
      const wholeStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;

      let ratingArray = Array.from({ length: wholeStars }, (_, idx) => idx + 1);
// Add half star
      if (hasHalfStar) {
          ratingArray.push(0.5); 
      }

      return ratingArray;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <div className="image-container overflow-hidden transform transition-transform hover:scale-150">
          <img src={photo} alt={item_name} className="h-64 w-full object-cover object-center" />
        </div>
        <div className="absolute top-0 left-0 bg-blue-500 text-white font-playfair px-5 py-3 rounded-tl-lg">
          <FaDollarSign className="inline mr-1" />
          <span className="font-semibold">{price}</span>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-gray-800 font-semibold text-xl mb-2">{item_name}</h2>
        <p className="text-gray-600 text-sm mb-2">Subcategory: {subcategory_Name}</p>
        <p className="text-gray-600 text-sm mb-2">Stock Status: {stockStatus}</p>
        <div className="flex items-center mb-2">

          <ul className="flex mb-2 mx-auto ">
            {/* Display rating */}
            {createRatingArray(rating).map((star, index) => (
              <li key={index} className="text-yellow-900 text-3xl">
                {star === 0.5 ? (
                  <MdOutlineStarHalf  className="w-6 h-6" />
                ) : (
                  <MdOutlineStarRate className="w-6 h-6" />


                )}
              </li>
            ))}
          </ul>
           
        </div>
        <Link to={`/craftify/${_id}`} className="block mt-4">
          <button className="bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CraftifyCard;

CraftifyCard.propTypes = {
  singleCard: PropTypes.object,
}
