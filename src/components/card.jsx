export const Card = ({ image, title, text }) => {
    return (
        <div className="w-full flex flex-col h-fit  md:w-1/4 bg-[#F9FAFA]" >
            <img
                className="text-[25pt] h-[200px] font-bold w-full "
                src={image}
                alt="Card Image"
            />

            <div className="w-full px-[35px] flex flex-col  items-center justify-center py-[35px] gap-y-[15px]">
                <p className="font-poppins text-[22px]">{title}</p>

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
