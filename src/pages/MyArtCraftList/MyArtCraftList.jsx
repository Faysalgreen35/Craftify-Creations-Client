import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { MdOutlineStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtCraftList = () => {
    const { user } = useContext(AuthContext);
    const [artsCrafts, setArtsCrafts] = useState([]);
    const [filter, setFilter] = useState("all"); // Default filter value

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://craftify-creations-server.vercel.app/updateCard/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const reamining = artsCrafts.filter(cof => cof._id !== _id)
                            setArtsCrafts(reamining);
                        }
                    })

            }
        });
    }
    useEffect(() => {
        if (user) {
            fetch(`https://craftify-creations-server.vercel.app/craftify/${user?.email}`)
                
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    setArtsCrafts(data);
                })
                .catch(error => console.error('Error fetching arts & crafts:', error));
        }
    }, [user]);



    // Function to handle filter change
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // Filter arts & crafts based on customization
    const filteredArtsCrafts = artsCrafts.filter(art => {
        if (filter === "all") {
            return true; // Show all arts & crafts
        } else {
            return art.customization === filter;
        }
    });

    // Function to create an array representing the rating
    const createRatingArray = (rating) => {
        return Array.from({ length: rating }, (_, idx) => idx + 1);
    };


    return (
        <div className="p-8  text-yellow-800 text-neon-lime mt-12   dark:bg-gray-800 dark:text-white    font-bold font-playfair">
            <h1 className="text-4xl font-bold mb-8">My Art & Craft List</h1>
            {/* Dropdown for filter */}
            <div className="mb-8 text-center">
                <label htmlFor="customizationFilter" className="block text-sm font-medium text-gray-700 mb-2   text-neon-lime mt-12   dark:bg-gray-800 dark:text-white     font-playfair">Filter by Customization:</label>
                <select id="customizationFilter" value={filter} onChange={handleFilterChange} className="border border-gray-300 rounded px-4 py-2  text-neon-lime mt-12   dark:bg-gray-800 dark:text-white    font-bold font-playfair  ">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  text-yellow-700 text-neon-lime mt-12   dark:bg-gray-800 dark:text-white     font-bold font-playfair">
                {filteredArtsCrafts.map(art => (
                    <div key={art.id} className="relative border border-gray-300 rounded">
                        <img src={art.photo} alt={art.item_name} className="w-full h-48 object-cover rounded-t" />
                        <div className="absolute top-0 right-0 opacity-80 font-extrabold text-2xl  bg-gray-100 text-orange-900 px-10 py-2 rounded-bl">
                            ${art.price}
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{art.item_name}</h2>

                            <ul className="flex mb-2">
                                {/* Display rating */}
                                {createRatingArray(art.rating).map((_, index) => <li key={index} className="text-yellow-900 text-3xl " > <MdOutlineStarRate
                                ></MdOutlineStarRate> </li>)}
                            </ul>
                            <p className="text-gray-600 mb-2">Customization: {art.customization}</p>
                            <p className="text-gray-600 mb-2">Stock Status: {art.stockStatus}</p>
                            <div className="flex justify-between">
                                <Link to={`updateCraftify/${art._id}`}>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update</button>

                                </Link>

                                <Link>
                                    <button
                                        onClick={() => handleDelete(art._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyArtCraftList;
