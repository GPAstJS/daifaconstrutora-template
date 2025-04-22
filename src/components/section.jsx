import { BsGeoAltFill } from 'react-icons/bs';


export const HeroSection = () => {
    return (
        <div className="flex flex-col items-center md:items-start justifty-center md:flex-row">
            <BsGeoAltFill className="w-[50px] h-[50px]" />

            <div className="flex flex-col w-full md:w-[495px] items-center md:items-start justify-center gap-y-[15px] px-[15px]">
                <p className="text-[30px] w-fit font-bold font-poppins">
                    Title Here
                </p>

                <p className="text-[18px] text-center md:text-left font-montserrat">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                    autem. Corrupti, ut odit rem natus itaque eligendi porro fugit
                    unde repellendus, esse consectetur doloribus omnis? Iure aliquam
                    laborum sint recusandae.
                </p>
            </div>
        </div>
    );
};
