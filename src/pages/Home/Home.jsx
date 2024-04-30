
 
 
import { Helmet } from "react-helmet-async";
import Banner from "../../shared/Banner";
import { useState, useEffect } from "react";
import CraftifyCard from "./CraftifyCard";
import SubcategoryCard from "../SubcategoryCard/SubcategoryCard";
import ServicesSection from "../PortfolioSection/ServicesSection";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
// import ArticleCard from "../Articles/ArticleCard";
import { Typewriter } from 'react-simple-typewriter';
import ArticleCard from "../Articles/ArticleCard ";

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

    if (loading) {
        return (
            <div className="w-full text-center ">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className=" bg-[#FAF3E8] dark:bg-gray-700">
            <Helmet>
                <title>Craftify Creations || Home</title>
            </Helmet>
            {/* Professional tooltips */}
            <div className="font-bold text-center text-3xl flex justify-between">
           <a id="not-clickable">◕‿‿◕</a>
           <Tooltip anchorSelect="#not-clickable" content="This button is not clickable">
                <button className="tooltip-btn">You can not click me :(</button>
            </Tooltip>
            <a className="my-anchor-element">◕‿‿◕</a>
            <Tooltip anchorSelect=".my-anchor-element" content="Hello world!">
                <a className="my-anchor-element">◕‿‿◕</a>
            </Tooltip>
            <Tooltip anchorSelect="#clickable" content="Click me!" clickable>
                <button className="tooltip-btn">You can click me!</button>
            </Tooltip>
           </div>
            <div className="text-center font-playfair font-bold  text-[#916211] " style={{ fontSize: '2rem' }}>
                <Typewriter
                    words={['Hello!', 'Welcome to Craftify Creations!', 'Explore our amazing crafts!']}
                    loop={5000}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </div>
                        

            <h1 className="text-center    lg:py-36  font-bold text-5xl mt-1 font-mono">Welcome to <span className="font-bold  text-yellow-700 font-jacquard"><Typewriter
                    words={['Craftify Creations!' ]}
                    loop={5000}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                /></span> </h1>
           {/* Professional tooltips */}
           <div className="font-bold text-center text-3xl flex justify-between">
           <a id="not-clickable">◕‿‿◕</a>
           <Tooltip anchorSelect="#not-clickable" content="This button is not clickable">
                <button className="tooltip-btn">You can not click me :(</button>
            </Tooltip>
            <a className="my-anchor-element">◕‿‿◕</a>
            <Tooltip anchorSelect=".my-anchor-element" content="Hello world!">
                <a className="my-anchor-element">◕‿‿◕</a>
            </Tooltip>
            <Tooltip anchorSelect="#clickable" content="Click me!" clickable>
                <button className="tooltip-btn">You can click me!</button>
            </Tooltip>
           </div>
             
            <Banner></Banner>
            <div className="lg:max-w-6xl   text-black  mt-12 text-center mx-auto dark:bg-gray-800 dark:text-white ">
                <h1 className="text-center text-[#916211] font-extralight pt-12   font-playfair    lg:text-9xl">+06</h1>
                <h1 className="text-center font-inter text-[#916211] font-bold text-4xl lg:text-8xl lg:px-32    ">Craft items</h1>

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
                <div className="lg:max-w-6xl   text-black  mt-12 text-center mx-auto dark:bg-gray-800 dark:text-white ">
                    <h1 className="text-center  text-[#916211] font-playfair  font-semibold  pt-12 lg:text-9xl  ">+06</h1>
                    <h1 className="text-center font-playfairr text-[#916211] font-bold text-4xl lg:text-8xl lg:px-32">Sub Categories</h1>
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
            <ServicesSection></ServicesSection>
            <div>
                <ArticleCard></ArticleCard>
            </div>
            
        </div>
    );
};

export default Home;

 