import { Typewriter } from "react-simple-typewriter";
 
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from "react";

const ServicesSection = () => {

    //aos use
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the duration for the animation
            once: true, // Set to true if you want the animation to occur only once
        });
    }, []);
    return (
        <div data-aos="flip-left" className="m-12 bg-orange-100 dark:bg-gray-700 text-[#916211] dark:text-white  w-full mx-auto p-12">
            <div className="container mx-auto px-4 lg:px-0">
                <h2 className="text-3xl font-bold mb-8 text-[#916211]">Services</h2>
                <h2 className="mb-5"><button className="bg-[#916211] font-bold text-white p-6 text-3xl">Our Services</button> <span className="font-bold  text-yellow-700 text-3xl font-playfair "><Typewriter
                    words={[ 'Custom Artwork, Art Restoration, Art Consulting', 'Custom Artwork, Art Restoration, Art Consulting', 'Custom Artwork, Art Restoration, Art Consulting' ]}
                    loop={5000}
                    cursor
                    cursorStyle='....'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                /></span></h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="portfolio-card">
                     <img src="https://wordpress.templatetrip.com/WCMTM01/WCMTM029_kraftiart/wp-content/uploads/2023/09/portfolio-04.jpg" alt="Portfolio 04" className="w-full transition-transform duration-300 transform hover:scale-110" />
                        <h3 className="text-xl font-bold mt-4">Custom Artwork</h3>
                        <p className="text-gray-700">The process of creating custom art</p>
                    </div>
                    <div className="portfolio-card">
                        <img src="https://wordpress.templatetrip.com/WCMTM01/WCMTM029_kraftiart/wp-content/uploads/2023/09/portfolio-05.jpg" alt="Portfolio 05" className="w-full transition-transform duration-300 transform hover:scale-110" />
                        <h3 className="text-xl font-bold mt-4">Art Restoration</h3>
                        <p className="text-gray-700">Detail your expertise in restoring</p>
                    </div>
                    <div className="portfolio-card">
                        <img src="https://wordpress.templatetrip.com/WCMTM01/WCMTM029_kraftiart/wp-content/uploads/2023/09/portfolio-06.jpg" alt="Portfolio 06" className="w-full transition-transform duration-300 transform hover:scale-110" />
                        <h3 className="text-xl font-bold mt-4">Art Consulting</h3>
                        <p className="text-gray-700">Explain how you can assist clients</p>
                    </div>
                    <div className="portfolio-card">
                        <img src="https://wordpress.templatetrip.com/WCMTM01/WCMTM029_kraftiart/wp-content/uploads/2023/09/portfolio-01.jpg" alt="Portfolio 01" className="w-full transition-transform duration-300 transform hover:scale-110" />
                        <h3 className="text-xl font-bold mt-4">Art Classes or Workshops</h3>
                        <p className="text-gray-700">Describe the types of classes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;