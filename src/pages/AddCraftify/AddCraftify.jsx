import { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
const AddCraftify = () => {

    const {user}= useContext(AuthContext);
    const [subcategory_Name, setSubcategory] = useState("");
    const [customization, setCustomization] = useState("");
    const [stockStatus, setStockStatus] = useState("");
    

    const handleAddCraftify = event => {
        event.preventDefault();
        const form = event.target;
        const item_name= form.item_name.value;
        // const subcategory_Name = form.subcategory_Name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        // const customization = form.customization.value;
        const photo = form.photo.value;
        const processing_time = form.processing_time.value;
        // const stockStatus = form.stockStatus.value;
        const email = user.email;
        const user_name = user.displayName;
        
        const newcraftify = { item_name, subcategory_Name, description, price, rating, customization, photo, processing_time, stockStatus, email, user_name };
        console.log(newcraftify);

        // send data to the server 
        fetch('https://craftify-creations-server.vercel.app/craftify', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(newcraftify)
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
            <Helmet>
                <title>Craftify Creations || Add Craftify Page</title>
            </Helmet>
            <h1 className="text-3xl font-extrabold text-[#916211]">Add Craftify</h1>

            <form onSubmit={handleAddCraftify} >
                {/* form row  */}
                <div className="md:flex mb-8 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Item Name</span>
                        </label>
                        <div className="join">

                            <input className="input input-bordered join-item w-full" name="item_name" type="text" placeholder="  item_name" />

                        </div>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span>Subcategory Name</span>
                        </label>
                        <div className="join">
                     
                             
                            <select id="customizationFilter" value={subcategory_Name} onChange={event => setSubcategory(event.target.value)}  className="border join w-full border-gray-300 rounded px-4 py-3  text-neon-lime  dark:bg-gray-800 dark:text-white font-bold font-playfair ">
                                <option className='py-3 text-3xl' value="">Choose a subcategory</option>
                                <option className='py-3 text-3xl' value="Landscape_Painting">Landscape Painting</option>
                                <option className='py-3 text-3xl' value="Portrait_Drawing">Portrait Drawing:</option>
                                <option className='py-3 text-3xl' value="Watercolour_Painting">Watercolour Painting</option>
                                <option className='py-3 text-3xl' value="Oil_Painting">Oil Painting</option>
                                <option className='py-3 text-3xl' value="Charcoal_Sketching">Charcoal Sketching</option>
                                <option className='py-3 text-3xl' value="Cartoon_Drawing">Cartoon  Drawing</option>
                                {/* Add other subcategory options */}
                            </select>
                        

                            {/* <input className="input input-bordered join-item w-full" name="subcategory_Name" type="text" placeholder="subcategory_Name " /> */}

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
                    <div className="form-control md:w-1/2 lg:ml-4">
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
                    {/* <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span>Customization</span>
                        </label>
                        <div className="join">
                            <input className="input input-bordered join-item w-full" name="customization" type="text" placeholder="customization" />

                        </div>
                    </div> */}
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span>Customization</span>
                        </label>
                        <div className="join"> 
                        <select id="customizationFilter" value={customization} onChange={event => setCustomization(event.target.value)}    className="border join w-full border-gray-300 rounded px-4 py-3  text-neon-lime  dark:bg-gray-800 dark:text-white font-bold font-playfair ">
                   
                    <option className='py-4 text-3xl' value="yes">Yes</option>
                    <option className='py-4 text-3xl' value="no">No</option>
                     </select>
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
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span>Stock Status</span>
                        </label>
                        <div className="join">
                            {/* <input className="input input-bordered join-item w-full" name="stockStatus" type="text" placeholder="stockStatus" /> */}

                           
                        <select id="customizationFilter" value={stockStatus} onChange={event => setStockStatus(event.target.value)}    className="border join w-full border-gray-300 rounded px-4 py-3  text-neon-lime  dark:bg-gray-800 dark:text-white font-bold font-playfair ">
                   
                    <option className='py-4 text-2xl' value="yes">In Stock</option>
                    <option className='py-4 text-2xl' value="no"> Out of Stock: Made to Order</option>
                     </select>
                        

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

// import { useContext } from 'react';
// import Swal from 'sweetalert2'
// import { AuthContext } from '../../providers/AuthProvider';
// import { Helmet } from 'react-helmet-async';
// const AddCraftify = () => {

//     const {user}= useContext(AuthContext);
    

//     const handleAddCraftify = event => {
//         event.preventDefault();
//         const form = event.target;
//         const item_name= form.item_name.value;
//         const subcategory_Name = form.subcategory_Name.value;
//         const description = form.description.value;
//         const price = form.price.value;
//         const rating = form.rating.value;
//         const customization = form.customization.value;
//         const photo = form.photo.value;
//         const processing_time = form.processing_time.value;
//         const stockStatus = form.stockStatus.value;
//         const email = user.email;
//         const user_name = user.displayName;
        
//         const newcraftify = { item_name, subcategory_Name, description, price, rating, customization, photo, processing_time, stockStatus, email, user_name };
//         console.log(newcraftify);

//         // send data to the server 
//         fetch('https://craftify-creations-server.vercel.app/craftify', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },

//             body: JSON.stringify(newcraftify)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.insertedId) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'User added successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     })
//                 }
//             })


//     }

//     return (
//         <div className="bg-[#F4F3F0] p-20  text-pruple-500   dark:bg-gray-800 dark:text-white    ">
//             <Helmet>
//                 <title>Craftify Creations || Add Craftify Page</title>
//             </Helmet>
//             <h1 className="text-3xl font-extrabold">Add Craftify</h1>

//             <form onSubmit={handleAddCraftify} >
//                 {/* form row  */}
//                 <div className="md:flex mb-8 ">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span>Item Name</span>
//                         </label>
//                         <div className="join">


//                             <input className="input input-bordered join-item w-full" name="item_name" type="text" placeholder="  item_name" />

//                         </div>
//                     </div>
//                     <div className="form-control md:w-1/2 lg:ml-4">
//                         <label className="label">
//                             <span>subcategory_Name</span>
//                         </label>
//                         <div className="join">


//                             <input className="input input-bordered join-item w-full" name="subcategory_Name" type="text" placeholder="subcategory_Name " />

//                         </div>
//                     </div>
//                 </div>
//                 {/* form short description row  */}
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span>Short description</span>
//                         </label>
//                         <div className="join">


//                             <input className="input input-bordered join-item w-full" name="description" type="text" placeholder="short-description" />

//                         </div>
//                     </div>
//                     <div className="form-control md:w-1/2 lg:ml-4">
//                         <label className="label">
//                             <span>Price</span>
//                         </label>
//                         <div className="join">


//                             <input className="input input-bordered join-item w-full" name="price" type="text" placeholder="price" />

//                         </div>
//                     </div>
//                 </div>
//                 {/* form rating and customization row  */}
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span>Rating</span>
//                         </label>
//                         <div className="join">
//                             <input className="input input-bordered join-item w-full" name="rating" type="text" placeholder="rating" />

//                         </div>
//                     </div>
//                     <div className="form-control md:w-1/2 lg:ml-4">
//                         <label className="label">
//                             <span>Customization</span>
//                         </label>
//                         <div className="join">
//                             <input className="input input-bordered join-item w-full" name="customization" type="text" placeholder="customization" />

//                         </div>
//                     </div>
//                 </div>
//                 {/* form  processing_time and stockStatus row  */}
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span>Processing Time</span>
//                         </label>
//                         <div className="join">
//                             <input className="input input-bordered join-item w-full" name="processing_time" type="text" placeholder="processing_time" />

//                         </div>
//                     </div>
//                     <div className="form-control md:w-1/2 lg:ml-4">
//                         <label className="label">
//                             <span>Stock Status</span>
//                         </label>
//                         <div className="join">
//                             <input className="input input-bordered join-item w-full" name="stockStatus" type="text" placeholder="stockStatus" />

//                         </div>
//                     </div>
//                 </div>
//                 {/* form photo url row  */}
//                 <div className="md:flex mb-8">
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span>Photo Url</span>
//                         </label>

//                         <div className="join">
//                             <input className="input input-bordered join-item w-full" name="photo" type="text" placeholder="Photo Url" />

//                         </div>
//                     </div>

//                 </div>
//                 <input className="btn btn-block btn-secondary" type="submit" value="Add Craftify" />
//             </form>
//         </div>
//     );
// };

// export default AddCraftify;