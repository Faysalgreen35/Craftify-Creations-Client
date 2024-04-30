
import { useContext } from 'react';
// import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateCraftify = () => {

    const { user } = useContext(AuthContext);
    const craftify = useLoaderData();

    const { _id, item_name, subcategory_Name, description, price, rating, customization, photo, processing_time, stockStatus } = craftify;

    const handleUpdateCraftify = event => {
        event.preventDefault();
        const form = event.target;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const description = form.description.value;
        const price = form.price.value;
        // const rating = form.rating.value;
        const rating = parseFloat(form.rating.value);
        const customization = form.customization.value;
        const photo = form.photo.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const email = user.email;
        const user_name = user.displayName;

        const updatedCraftify = { item_name, subcategory_Name, description, price, rating, customization, photo, processing_time, stockStatus, email, user_name };
        console.log(updatedCraftify);

        // send data to the server 
        fetch(`https://craftify-creations-server.vercel.app/updateCard/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(updatedCraftify)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'craftify updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    return (
        <div className="bg-[#F4F3F0] p-20  text-pruple-500   dark:bg-gray-800 dark:text-white">
            <Helmet>
                <title>Craftify Creations || Updated Craftify  </title>
            </Helmet>
            <h1 className="text-3xl font-extrabold">Updated Craftify : {item_name }</h1>

            <form onSubmit={handleUpdateCraftify} >
                {/* form row  */}
                <div className="md:flex mb-8 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Item Name</span>
                        </label>
                        <div className="join">


                            <input className="input input-bordered join-item w-full" defaultValue={item_name} name="item_name" type="text" placeholder="  item_name" />

                        </div>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>subcategory_Name</span>
                        </label>
                        <div className="join">


                            <input className="input input-bordered join-item w-full" defaultValue={subcategory_Name} name="subcategory_Name" type="text" placeholder="subcategory_Name " />

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


                            <input className="input input-bordered join-item w-full" defaultValue={description} name="description" type="text" placeholder="short-description" />

                        </div>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Price</span>
                        </label>
                        <div className="join">


                            <input className="input input-bordered join-item w-full" defaultValue={price} name="price" type="text" placeholder="price" />

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
                            <input className="input input-bordered join-item w-full" defaultValue={rating} name="rating" type="text" placeholder="rating" />

                        </div>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Customization</span>
                        </label>
                        <div className="join">
                            <input className="input input-bordered join-item w-full" defaultValue={customization} name="customization" type="text" placeholder="customization" />

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
                            <input className="input input-bordered join-item w-full" defaultValue={processing_time} name="processing_time" type="text" placeholder="processing_time" />

                        </div>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Stock Status</span>
                        </label>
                        <div className="join">
                            <input className="input input-bordered join-item w-full" defaultValue={stockStatus} name="stockStatus" type="text" placeholder="stockStatus" />

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
                            <input className="input input-bordered join-item w-full" defaultValue={photo} name="photo" type="text" placeholder="Photo Url" />

                        </div>
                    </div>

                </div>
                <input className="btn btn-block btn-secondary" type="submit" value="Update Craftify" />
            </form>
        </div>

    );
};

export default UpdateCraftify;