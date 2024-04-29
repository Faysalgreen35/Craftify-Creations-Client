 
import { Link, useLoaderData, useParams } from "react-router-dom";

const Subcategories = () => {
    const loadedSelectedCategory = useLoaderData();
    const { subcategory_Name } = useParams();

    // Filter subcategories based on the provided subcategory name
    const filteredSubcategories = loadedSelectedCategory.filter(item => item.subcategory_Name === subcategory_Name);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto m-12 gap-4 ">
            {/* Render each subcategory */}
            {filteredSubcategories.map(craft => (
                <div key={craft._id} className="">

                    <div className="flex max-w-xl mx-auto overflow-hidden bg-white shadow-2xl rounded-lg lg:w-96">
                        {/* Left side - Image */}
                        <div className="w-1/3">
                            <img
                                className="object-cover w-full h-full"
                                src={craft.photo}
                                alt={craft.item_name}
                            />
                        </div>
                        {/* Right side - Information */}
                        <div className="w-2/3 p-4">
                            <div className="font-bold text-xl mb-2">{craft.item_name}</div>
                            <p className="text-gray-700 text-base mb-2">
                                Subcategory: {craft.subcategory_Name}
                            </p>
                            <p className="text-gray-700 text-base mb-2">
                                Description: {craft.description}
                            </p>
                            <p className="text-gray-700 text-base mb-2">Price: ${craft.price}</p>
                            <p className="text-gray-700 text-base mb-2">Rating: {craft.rating}</p>
                            <p className="text-gray-700 text-base mb-2">
                                Processing Time: {craft.processing_time} days
                            </p>
                             
                            <Link
                                to={`/craftify/${craft._id}`}
                                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full inline-block"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Subcategories;


