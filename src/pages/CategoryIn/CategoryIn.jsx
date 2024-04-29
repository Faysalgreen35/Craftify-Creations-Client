  
import { useState } from "react";
// import { FaCartArrowDown } from "react-icons/fa";
import Swal from "sweetalert2";

const CategoryIn = () => {
    // Define state variables for subcategory
    const [subcategory_Name, setSubcategory] = useState("");

    // Function to handle form submission
    const handleAddCategory = event => {
        event.preventDefault();
        const form = event.target;
        const description = form.description.value;
        const photo = form.photo.value;

        const newCategory = { subcategory_Name, description, photo };
        console.log(newCategory);

        // Send data to the server 
        fetch('https://craftify-creations-server.vercel.app/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Category added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
        });
    };

    return (
        <div className="m-12">
            <form onSubmit={handleAddCategory}>
                <div className="mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span>Subcategory name</span>
                        </label>
                        <div className="join">
                            <select className="input input-bordered join-item w-full" value={subcategory_Name} onChange={e => setSubcategory(e.target.value)}>
                                <option value="">Choose a subcategory</option>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing:</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing Drawing">Cartoon  Drawing</option>
                                {/* Add other subcategory options */}
                            </select>
                        </div>
                    </div>
                  
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span>Short description</span>
                        </label>
                        <div className="join">
                            <input className="input input-bordered join-item w-full" name="description" type="text" placeholder="Short description" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Photo Url</span>
                        </label>
                        <div className="join">
                            <input className="input input-bordered join-item w-full" name="photo" type="text" placeholder="Photo Url" />
                        </div>
                    </div>
                </div>
                <input className="btn btn-block btn-secondary" type="submit" value="Add Category" />
            </form>
        </div>
    );
};

export default CategoryIn;
