import { BsGeoAltFill } from 'react-icons/bs';

export const HeroSection = ({ title, text, icon }) => {
    return (
        <div className="flex flex-col items-center md:items-start  justifty-center md:flex-row">
            {icon}

            <div className="flex flex-col w-full md:w-[495px] items-center md:items-start justify-center gap-y-[15px] px-[15px]">
                <p className="text-[1.5rem] sm:text-[30px] w-fit font-bold font-poppins">
                    {title}
                </p>

                <p className="text-[1rem] sm:text-[18px] text-center  md:text-left font-montserrat">
                    {text}
                </p>
            </div>
        </div>
    );
};
