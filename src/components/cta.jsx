export const CTA = ({ image, title, text }) => {
    return (
        <div className="w-full flex flex-col h-fit md:w-[350px] px-[1rem] lg:w-[45%] xl:w-[48%] 2xl:w-1/3    bg-[#F9FAFA]">
            <div className="w-full   bg-white shadow">
                <div className="w-full h-[200px] overflow-hidden">
                    <img
                        src={image}
                        alt="Construção"
                        className="w-full h-full object-cover  duration-1000 hover:scale-120"
                    />
                </div>
            </div>

            <div className="w-full h-[325px] lg:px-[25px]  flex flex-col  items-center justify-between py-[35px]">
                <p className="font-poppins font-bold text-[22px] tracking-wide">
                    {title}
                </p>

                <p className="font-montserrat text-[15px]">{text}</p>

                <a
                    className="font-bold text-gray-800 border-[2px] border-black rounded-[3px] px-[25px] py-[10px]"
                    href="#"
                >
                    Saiba Mais
                </a>
            </div>
        </div>
    );
};
