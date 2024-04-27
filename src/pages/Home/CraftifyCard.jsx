import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

import PropTypes from 'prop-types';
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineStarRate } from "react-icons/md";
 

const CraftifyCard = ({singleCard}) => {

    const {name, subcategory_Name, _id,   price, rating, photo, stockStatus, } = singleCard;
    // const {name, subcategory_Name, _id, description, price, rating, customization, photo, processing_time, stockStatus, } = singleCard;
    const ratingArray = Array.from({ length: rating }, (_, idx) => idx + 1);

    // const handleDelete = _id => {
    //     console.log(_id)
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {


    //             fetch(`http://localhost:5000/craftify/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your coffee has been deleted.",
    //                             icon: "success"
    //                         });

    //                         const reamining = craftify.filter(cof =>cof._id !== _id)
    //                         setCraftify(reamining);
    //                     }
    //                 })

    //         }
    //     });
    // }
    return (
    
    <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl shadow-2xl lg:h-32 lg:w-32" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className=" text-left  card-title">{name}</h2>
    <p className=" text-left   first-letter: font-playfair font-bold "><span className="text-sm text-left ">Subcategory</span>: {subcategory_Name}</p>
    <p className=" text-left    font-playfair font-bold">stockStatus: {stockStatus}</p>
    <p className="  text-left   font-playfair font-bold flex items-center"> <span>Price</span>: <span className="ml-3"><FaDollarSign /></span>{price}</p>
    <ul className="flex">
       
        {
            ratingArray.map(rate => <li key={rate.idx} className="text-yellow-900 text-3xl " > <MdOutlineStarRate  
                ></MdOutlineStarRate> </li>)
            
           }
        
    </ul>

     
    <Link to={`/craftify/${_id}`}>
    <div className="card-actions">
      <button className="btn btn-secondary ">View Details</button>
    </div>
    </Link>
  </div>
</div>
    );
};

export default CraftifyCard;

CraftifyCard.propTypes = {
    singleCard: PropTypes.object,
}