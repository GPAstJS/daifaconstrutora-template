import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import './style.css';
import 'swiper/css/navigation';

import SwiperImage from '../../assets/swiper-image.jpg';

export const Carousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 5000 }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper w-full cursor-pointer "
            >
                <SwiperSlide className="mt-[140px]  z-99">
                    <div className="w-full bg-[#2F163B] flex flex-col items-center justify-center h-[450px] sm:h-[700px] ">
                        <div className="animation-div px-[1rem]  md:w-[95%]  bg-transparent flex flex-col items-center justify-center gap-y-[15px]">
                            <p className="text-[2rem] md:text-[2.5rem] xl:text-[60px]  text-white font-poppins font-bold ">
                                Construa seu imóvel na planta
                            </p>
                            <p className="font-montserrat  text-white text-[1rem] md:text-[1.25rem] lg:text-[20px] max-w-[1200px]       ">
                                Nosso compromisso é oferecer um serviço de alta
                                qualidade com agilidade, buscando sempre os melhores
                                resultados no menor tempo possível e priorizando a
                                relação custo-benefício ideal para o seu imóvel.
                            </p>

                            <a
                                className="w-[170px] h-[43px] bg-blue-500 hover:bg-transparent duration-300 hover:text-white flex items-center justify-center border-white border-[2px] font-poppins font-bold text-[16px]"
                                href="#"
                            >
                                FALE CONOSCO
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full flex items-center justify-center relative mt-[140px] ">
                    <div
                        style={{
                            backgroundImage: `url(${SwiperImage})`,
                        }}
                        className={`scale-animation w-full flex items-center justify-center  h-[700px]  absolute z-[-10] top-0 left-0 bg-no-repeat`}
                    ></div>

                    <div className="z-20 animation-div px-[1rem] w-full lg:p-[25px]  h-[450px] sm:h-[700px]  bg-transparent flex flex-col items-center justify-center gap-y-[15px]">
                        <p className="text-[2rem] md:text-[2.5rem] xl:text-[60px] text-white font-poppins font-bold ">
                            Construa seu imóvel na planta
                        </p>
                        <p className="font-montserrat  text-white text-[1rem] md:text-[1.25rem] lg:text-[20px] max-w-[1200px]">
                            Nosso compromisso é oferecer um serviço de alta qualidade
                            com agilidade, buscando sempre os melhores resultados no
                            menor tempo possível e priorizando a relação
                            custo-benefício ideal para o seu imóvel.
                        </p>

                        <a
                            className="w-[170px] h-[43px] bg-blue-500 hover:bg-transparent duration-300 hover:text-white flex items-center justify-center border-white border-[2px] font-poppins font-bold text-[16px]"
                            href="#"
                        >
                            FALE CONOSCO
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
