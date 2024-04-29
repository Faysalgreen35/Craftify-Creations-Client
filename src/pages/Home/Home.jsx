

import { Helmet } from "react-helmet-async";
import Banner from "../../shared/Banner";
import { useState, useEffect } from "react";
import CraftifyCard from "./CraftifyCard";
// import { useLoaderData } from "react-router-dom";
// import Subcategories from './../Subcategories/Subcategories';
import SubcategoryCard from "../SubcategoryCard/SubcategoryCard";
import PortfolioSection from "../PortfolioSection/PortfolioSection";

const Home = () => {
    // Define state variables
    const [craftify, setCraftify] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    // Define loader functions
    const loadCraftifyData = async () => {
        try {
            const craftifyResponse = await fetch('https://craftify-creations-server.vercel.app/craftify');
            const craftifyData = await craftifyResponse.json();
            setCraftify(craftifyData);
        } catch (error) {
            console.error("Error loading craftify data:", error);
        } finally {
            setLoading(false);
        }
    };

    const loadCategoryData = async () => {
        try {
            const categoryResponse = await fetch('https://craftify-creations-server.vercel.app/category');
            const categoryData = await categoryResponse.json();
            setCategory(categoryData);
            // Handle category data if needed
        } catch (error) {
            console.error("Error loading category data:", error);
        }
    };

    // Load data when component mounts
    useEffect(() => {
        loadCraftifyData();
        loadCategoryData();
    }, []);

    // Render component based on loading state
    // const [loading, setLoading] = useState(true);

    if (loading) {
        return <div className="w-full text-center "><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span></div>;
    }

    return (
        <div>
            <Helmet>
                <title>Craftify Creations || Home Page</title>
            </Helmet>
            <h1 className="text-center  bg-orange-500 py-36  font-bold text-5xl mt-12 font-mono">Welcome to <span className="font-bold  text-yellow-700 font-jacquard">Craftify Creations</span> </h1>
            <Banner></Banner>
            <div className="lg:max-w-6xl bg-orange-100 text-black  mt-12 text-center mx-auto dark:bg-gray-800 dark:text-white ">
                <h1 className="text-center   text-orange-800   font-extralight pt-12  font-anton     lg:text-9xl  ">+ 6</h1>
                <h1 className="text-center font-inter text-orange-900 font-bold lg:text-6xl lg:px-32    ">Craft items</h1>


                <p className="text-center font-inter font-bold text-black mt-12 dark:text-white md:text-3xl lg:text-5xl">Designed by artists, made <br /> by us, just for you.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:p-4 mx-auto lg:m-12">
                    {craftify && craftify?.slice(0, 6).map(singleCard => <CraftifyCard key={singleCard._id}
                        setCraftify={setCraftify}
                        craftify={craftify}
                        singleCard={singleCard}
                    />
                    )}
                </div>
            </div>

            <section>

                <div className="lg:max-w-6xl bg-orange-100 text-black  mt-12 text-center mx-auto dark:bg-gray-800 dark:text-white ">

                    <h1 className="text-center   text-orange-800   font-extralight pt-12  font-anton     lg:text-9xl  ">+ 6</h1>
                    <h1 className="text-center font-inter text-orange-900 font-bold lg:text-6xl lg:px-32">Sub Categories</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:p-4 mx-auto lg:m-12">
                        {category && category?.slice(0, 6).map(singleCard => <SubcategoryCard key={singleCard._id}
                            setCraftify={setCraftify}
                            category={category}
                            singleCard={singleCard}
                        />
                        )}
                    </div>
                </div>




            </section>

            <PortfolioSection></PortfolioSection>
        </div>
    );
};

export default Home;
