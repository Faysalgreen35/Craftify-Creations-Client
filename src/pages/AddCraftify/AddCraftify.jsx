
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';
const AddCraftify = () => {

    const {user}= useContext(AuthContext);

    const handleAddCraftify = event => {
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const photo = form.photo.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const email = user.email;
        const user_name = user.displayName;
        
        const newCoffee = { name, subcategory_Name, description, price, rating, customization, photo, processing_time, stockStatus, email, user_name };
        console.log(newCoffee);

        // send data to the server 
        fetch('http://localhost:5000/craftify', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    return (
        <div className="bg-[#F4F3F0] p-20  text-pruple-500   dark:bg-gray-800 dark:text-white    ">
            <h1 className="text-3xl font-extrabold">Add Craftify</h1>

            <form onSubmit={handleAddCraftify} >
                {/* form row  */}
                <div className="md:flex mb-8 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Item Name</span>
                        </label>
                        <div className="join">


                            <input className="input input-bordered join-item w-full" name="name" type="text" placeholder="  Name" />

                        </div>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>subcategory_Name</span>
                        </label>
                        <div className="join">


                            <input className="input input-bordered join-item w-full" name="subcategory_Name" type="text" placeholder="subcategory_Name " />

                        </div>
                    </div>
                </div>
                {/* form short description row  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Short description</span>
                        </label>
                        <div className="join">


                            <input className="input input-bordered join-item w-full" name="description" type="text" placeholder="short-description" />

                        </div>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Price</span>
                        </label>
                        <div className="join">


                            <input className="input input-bordered join-item w-full" name="price" type="text" placeholder="price" />

                        </div>
                    </div>
                </div>
                {/* form rating and customization row  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Rating</span>
                        </label>
                        <div className="join">
                            <input className="input input-bordered join-item w-full" name="rating" type="text" placeholder="rating" />

                        </div>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Customization</span>
                        </label>
                        <div className="join">
                            <input className="input input-bordered join-item w-full" name="customization" type="text" placeholder="customization" />

                        </div>
                    </div>
                </div>
                {/* form  processing_time and stockStatus row  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Processing Time</span>
                        </label>
                        <div className="join">
                            <input className="input input-bordered join-item w-full" name="processing_time" type="text" placeholder="processing_time" />

                        </div>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Stock Status</span>
                        </label>
                        <div className="join">
                            <input className="input input-bordered join-item w-full" name="stockStatus" type="text" placeholder="stockStatus" />

                        </div>
                    </div>
                </div>
                {/* form photo url row  */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Photo Url</span>
                        </label>

                        <div className="join">
                            <input className="input input-bordered join-item w-full" name="photo" type="text" placeholder="Photo Url" />

                        </div>
                    </div>

                </div>
                <input className="btn btn-block btn-secondary" type="submit" value="Add Craftify" />
            </form>
        </div>
    );
};

export default AddCraftify;