import { Link } from "react-router-dom";

const SubcategoryCard = ({ singleCard }) => {
    const { subcategory_Name, photo, description } = singleCard;

    return (
        <div className="mx-auto py-4 ">

            <Link to={`category/${subcategory_Name}`}>
                <div className="relative w-48 h-48 overflow-hidden rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
                    <img src={photo} alt={description} className="object-cover w-full h-full transition-opacity duration-300 opacity-100 hover:opacity-70" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                        <p className="text-white text-lg font-bold z-10">{subcategory_Name}</p>
                    </div>
                </div>
            </Link>
        </div>



    );
};

export default SubcategoryCard;
