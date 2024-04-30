
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
  

const AllArtCraftItems = () => {
    const craftify = useLoaderData();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       
        // Simulating data loading delay (You can replace this with your actual data loading logic)
        const timeout = setTimeout(() => {
            setLoading(false); // Set loading to false once data is loaded
        }, 1000); // Simulating 2 seconds loading delay
       
        // Cleanup function to clear timeout
        return () => clearTimeout(timeout);
    }, []);  

    if (loading) {
        return  <div className="w-full text-center  "><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></div>;
    }
    


    return (
        <div   className="container mx-auto py-8">
             <Helmet>
                <title>Craftify Creations || AllArtCraftItems</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-8  text-yellow-950 dark:text-white">All Art & Craft Items</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300 bg-white dark:bg-gray-800">
                    <thead>
                        <tr className="bg-gray-600 dark:bg-gray-700 text-[#e6bf55] ">
                            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Item Image</th>
                            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 hidden md:table-cell">Subcategory</th>
                            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 ">Email</th>
                            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600 hidden md:table-cell">User</th>
                            <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        { craftify.map(cra => (
                            <tr key={cra._id} className="bg-gray-100 dark:bg-gray-600">
                                <td className="px-4 py-2 border border-gray-300 dark:border-gray-600"><img src={cra.photo} className="w-20 lg:w-40 h-20 lg:h-40" alt="" /></td>
                                <td className="px-4 py-2 border border-gray-300 dark:border-gray-600 hidden md:table-cell">{cra.subcategory_Name}</td>
                                <td className="px-4 py-2 border border-gray-300 dark:border-gray-600  ">{cra.email}</td>
                                <td className="px-4 py-2 border border-gray-300 dark:border-gray-600 hidden md:table-cell">{cra.user_name}</td>
                                <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">

                                    <Link to={`/craftify/${cra._id}`} className="block mt-4">
                                        <button className="bg-[#916211]   hover:bg-blue-700 text-white font-semibold py-2 px-4 w-full rounded-full">
                                            View Details
                                        </button>
                                    </Link>
                                         </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtCraftItems;
 