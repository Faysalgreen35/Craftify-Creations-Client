// import React from 'react';
 
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from 'react';
const ArticleCard = () => {

    //aos use
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the duration for the animation
            once: true, // Set to true if you want the animation to occur only once
        });
    }, []);
    return (

        <div data-aos="flip-left" className="m-12 pb-12" >
              <h2 className="text-3xl font-bold mb-8 text-[#916211]">Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
                <div className="max-w-md rounded overflow-hidden shadow-2xl bg-white">
                    <img className="w-full lg:h-[290px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7voN_atGtiiAsfNCQ4bH7zjNI7paCQMGTCTcLM8z1g4AB6JJwH7UHcSN7-3L5Xz88Uw&usqp=CAU" alt="Craftify Creations" />
                    <div className="px-6 py-3">
                        <div className="font-bold text-xl mb-2   text-[#e6bf55]">Exploring the Tranquility of Landscape Painting:</div>
                        <p className="text-gray-700 text-base">
                        Capturing Mountain Views and Forest Scenes.
                        </p>
                    </div>
                    
                </div>

                <div className="max-w-md rounded overflow-hidden shadow-2xl bg-white mt-4">
                    <img className="w-full lg:h-[300px]" src="https://www.muddycolors.com/wp-content/uploads/2019/05/DSC_0425-1.jpg" alt="Exploring Lottie React" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-[#e6bf55]">Mastering the Art of Portrait Drawing:</div>
                        <p className="text-gray-700 text-base">
                        From Pencil Sketches to Acrylic Canvases
                        </p>
                    </div>
                     
                </div>

                <div className="max-w-md rounded overflow-hidden shadow-2xl bg-white mt-4">
                    <img className="w-full lg:h-[300px]" src="https://www.pawss.store/cdn/shop/files/Floralstylegoldenretrieverdogartwatercolorpetportrait_1_copy_1024x1024@2x.jpg?v=1691042933" alt="Enhancing User Experience with React-tooltip" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-[#e6bf55]">The Delicate Dance of Watercolour Painting: </div>
                        <p className="text-gray-700 text-base">
                        Floral Art and Animal Portraits
                        </p>
                    </div>
                     
                </div>
            </div>
        </div>

    );
};

export default ArticleCard;
