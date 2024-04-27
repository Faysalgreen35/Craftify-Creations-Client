import { Helmet } from "react-helmet-async";
import Banner from "../../shared/Banner";
import { useState } from "react";
import CraftifyCard from "./CraftifyCard";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    
const loadedCraftify = useLoaderData();
const [craftify,setCraftify] =useState(loadedCraftify);

    return (
        <div>
            <Helmet>
                <title>Craftify Creations || Home Page</title>
            </Helmet>
             <h1 className="text-center   font-bold text-5xl mt-12 font-mono">Welcome to <span className="font-bold  text-yellow-700 font-jacquard">Craftify Creations</span> </h1>
            <Banner></Banner> 
            <div className="lg:max-w-6xl bg-orange-100 text-black  mt-12 text-center mx-auto dark:bg-gray-800 dark:text-white ">
                <h1 className="text-center font-inter text-orange-900 font-bold text-xl p-12"> Craft items section</h1>
                <p className="text-center font-inter font-bold text-black mt-12 md:text-3xl lg:text-5xl">Designed by artists, made <br /> by us, just for you.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:p-4 mx-auto lg:m-12">
                    {
                        craftify.slice(0,6).map(singleCard => <CraftifyCard key={singleCard._id}
                            setCraftify={setCraftify}
                            craftify={craftify}
                            singleCard={singleCard}

                        >

                        </CraftifyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;