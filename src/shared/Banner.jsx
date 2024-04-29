import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { FreeMode, Navigation, Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='md:max-w-6xl  lg:mt-12  '>
            <Swiper
                style={{
                    '--swiper-navigation-color': 'white',
                    '--swiper-pagination-color': 'white',
                }}
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{ delay: 2000 }}
                className="mySwiper3"
            >
                <SwiperSlide>
                    <div className="carousel-item relative w-full h-full" style={{ height: '700px' }}>
                        <img src="https://t.ly/qDUDj" className="w-full h-full object-cover" alt="slide1" />
                        <div className="absolute inset-0 flex flex-col   justify-center space-y-12 text-white text-left">
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <p className="z-10  text-left  text-base lg:text-5xl xl:text-2xl font-bold lg:w-1/2 px-4">Landscape painting captures the essence of nature beauty, translating the vastness of the outdoors onto canvas.  </p>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="carousel-item relative w-full h-full" style={{ height: '700px' }}>
                        <img src="https://tinyurl.com/2atnxwwy" className="w-full h-full object-cover" alt="slide2" />
                        <div className="absolute inset-0 flex flex-col   justify-center space-y-12 text-white">
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <p className="z-10 text-center text-base lg:text-xl xl:text-2xl font-bold lg:w-1/2 px-4">Portrait drawing is a captivating art form that focuses on capturing the essence and personality of an individual through the careful rendering of their likeness. </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-item relative w-full h-full" style={{ height: '700px' }}>
                        <img src="https://s1.dmcdn.net/v/PNgto1SJoAAbv9w3m/x1080" className="w-full h-full object-cover" alt="slide2" />
                        <div className="absolute inset-0 flex flex-col justify-center space-y-12 text-white">
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <p className="z-10 text-center text-base lg:text-4xl xl:text-2xl font-bold lg:w-1/2 px-4">
                                Landscape painting is a captivating art form that captures the beauty and grandeur of the natural world on canvas </p>
                        </div>
                    </div>
                </SwiperSlide>
                
                 
            </Swiper>
        </div>
    );
};

export default Banner;
