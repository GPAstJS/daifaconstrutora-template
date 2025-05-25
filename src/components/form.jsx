import { FaFacebook, FaInstagram, FaWhatsapp, FaMailBulk } from 'react-icons/fa';

export const Form = () => {
    return (
        <form
            id="form"
            className="w-full flex flex-col items-center justify-center bg-black py-[75px]"
        >
            <p className="font-poppins text-[1.5rem] sm:text-[40px] font-bold bg-blue-500 px-[15px] rounded-[3px] text-white">
                CONTATO
            </p>

            <div className="w-full  flex flex-col-reverse md:flex-col-reverse 2xl:flex-col-reverse items-center justify-center  py-[50px] md:py-[15px]">
                <div className="w-full md:w-[95%] 2xl:w-[50%] py-[25px] flex flex-col  items-center justify-center ">


                    <div className="flex flex-col ">
                        <div className="flex flex-row items-center  gap-x-[10px] py-[10px]">
                            <FaWhatsapp className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] fill-white" />
                            <p className="text-[14px] text-white font-montserrat">
                                WhatsApp: &lt;Seu Número&gt;
                            </p>
                        </div>
                        <div className="flex flex-row items-center  gap-x-[10px] py-[10px]">
                            <FaMailBulk className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] fill-white" />
                            <p className="text-[14px] text-white font-montserrat">
                                E-mail: &lt;Seu Número&gt;
                            </p>
                        </div>

                        <div className="flex flex-row gap-x-[10px]">
                            <div className="w-[35px] h-[35px] sm:w-[50px] cursor-pointer sm:h-[50px] rounded-full flex items-center justify-center bg-blue-500">
                                <FaFacebook className="h-[20px] w-[20px] sm:w-[24px] sm:h-[24px] fill-white" />
                            </div>

                            <div className="w-[35px] h-[35px] sm:w-[50px] cursor-pointer sm:h-[50px] rounded-full flex items-center justify-center bg-[#222222]">
                                <FaInstagram className="h-[20px] w-[20px] sm:w-[24px] sm:h-[24px] fill-white" />
                            </div>

                            <div className="w-[35px] h-[35px] sm:w-[50px] cursor-pointer sm:h-[50px] rounded-full flex items-center justify-center bg-[#21BE5C]">
                                <FaWhatsapp className="h-[20px] w-[20px] sm:w-[24px] sm:h-[24px] fill-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[95%]  lg:w-[65%] 2xl:w-[50%] gap-y-[15px] flex flex-col  items-center justify-center px-[10px]">


                    <div className="w-full flex flex-col items-start gap-y-[10px]">
                        <p className="text-[18px] text-white font-poppins">Nome</p>

                        <input
                            placeholder="Nome"
                            className="h-[41px] w-full text-[18px] bg-white font-poppins outline-none px-[10px]"
                            type="text"
                        />
                    </div>

                    <div className="w-full flex flex-col items-start gap-y-[10px]">
                        <p className="text-[18px] text-white font-poppins">
                            WhatsApp
                        </p>

                        <input
                            placeholder="WhatsApp"
                            className="h-[41px] w-full text-[18px] bg-white font-poppins outline-none px-[10px]"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col items-start w-full  gap-y-[10px]">
                        <p className="text-[18px] text-white font-poppins">E-mail</p>

                        <input
                            placeholder="E-mail"
                            className="w-full h-[41px] text-[18px] bg-white font-poppins outline-none px-[10px]"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col items-start w-full  gap-y-[10px]">
                        <p className="text-[18px] text-white font-poppins">
                            Mensagem
                        </p>

                        <textarea
                            placeholder="Mensagem"
                            className="w-full min-h-[41px]  max-h-[200px]  text-[18px] bg-white font-poppins outline-none p-[10px]"
                            type="text"
                        />
                    </div>

                    <button className="bg-blue-500 my-[10px] cursor-pointer w-full rounded-[3px] outline-none h-[41px] font-bold text-[22px] text-white font-poppins">
                        ENVIAR
                    </button>
                </div>
            </div>
        </form>
    );
};
