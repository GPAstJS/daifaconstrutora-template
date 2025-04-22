import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './style.css';

export const Carousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide className="mt-[140px] ">
                    <div className="w-full bg-blue-600 flex flex-col items-center justify-center h-[700px] ">
                        <div className="animation-div w-[95%] md:w-full bg-transparent flex flex-col items-center justify-center gap-y-[15px]">
                            <p className="text-[60px] text-white font-poppins font-bold ">
                                Text Here
                            </p>
                            <p className="font-montserrat  text-white text-[20px] max-w-[1200px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Harum officia, suscipit corrupti obcaecati
                                aliquid eaque laudantium sapiente eius magnam
                                veritatis facilis minus beatae libero voluptas,
                                adipisci pariatur nihil animi eveniet!
                            </p>

                            <a
                                className="w-[170px] h-[43px] bg-yellow-500 hover:bg-transparent duration-300 hover:text-white flex items-center justify-center border-white border-[2px] font-poppins font-bold text-[16px]"
                                href="#"
                            >
                                FALE CONOSCO
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mt-[112px]">
                    <div className="w-full bg-[#2F163B] flex flex-col items-center justify-center h-[700px] ">
                        <div className="animation-div   w-[95%] md:w-full  bg-transparent flex flex-col items-center justify-center gap-y-[15px]">
                            <p className="text-[60px] text-white font-poppins font-bold ">
                                Text Here
                            </p>
                            <p className="font-montserrat text-white text-[20px] max-w-[1200px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Harum officia, suscipit corrupti obcaecati
                                aliquid eaque laudantium sapiente eius magnam
                                veritatis facilis minus beatae libero voluptas,
                                adipisci pariatur nihil animi eveniet!
                            </p>

                            <a
                                className="w-[170px] h-[43px] bg-yellow-500 hover:bg-transparent duration-300 hover:text-white flex items-center justify-center border-white border-[2px] font-poppins font-bold text-[16px]"
                                href="#"
                            >
                                FALE CONOSCO
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
