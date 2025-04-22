import { FaFacebook, FaInstagram, FaWhatsapp, FaMailBulk     } from 'react-icons/fa';

export const Form = () => {
    return (
        <form id='form' className="w-full flex flex-col items-center justify-center bg-black py-[75px]">
            <p className="font-poppins text-[40px] font-bold bg-yellow-500 px-[15px] rounded-[3px] text-white">CONTATO</p>

            <div className="w-full  flex flex-col-reverse md:flex-row items-center justify-center gap-x-[50px] py-[50px]">
                <div className="w-full md:w-[35%] py-[25px] flex flex-col  items-center justify-center ">
                    <p className="font-poppins font-bold text-[40px] text-white">
                        INFORMAÇÕES
                    </p>

                    <div className="flex flex-col">
                        <div className="flex flex-row items-center  gap-x-[10px] py-[10px]">
                            <FaWhatsapp className="w-[50px] h-[50px] fill-white" />
                            <p className="text-white font-montserrat">
                                WhatsApp: &lt;Seu Número&gt;
                            </p>
                        </div>
                        <div className="flex flex-row items-center  gap-x-[10px] py-[10px]">
                            <FaMailBulk className="w-[50px] h-[50px] fill-white" />
                            <p className="text-white font-montserrat">
                                E-mail: &lt;Seu Número&gt;
                            </p>
                        </div>

                        <div className="flex flex-row gap-x-[10px]">
                            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-blue-500">
                                <FaFacebook className="w-[24px] h-[24px] fill-white" />
                            </div>

                            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#222222]">
                                <FaInstagram className="w-[24px] h-[24px] fill-white" />
                            </div>

                            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#21BE5C]">
                                <FaWhatsapp className="w-[24px] h-[24px] fill-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[35%] gap-y-[15px] flex flex-col  items-center justify-center px-[10px]">
                <p className="font-montserrat text-white flex flex-row gap-x-[15px] text-left font-bold text-[40px] px-[10px]">
                Preencha o <p className='px-[5px] text-white bg-yellow-500 rounded-[3px]'>Formulário</p>
            </p>

                    <div className="w-full flex flex-col items-start gap-y-[10px]">
                        <p className="text-[18px] text-white font-poppins">Nome</p>

                        <input
                            placeholder="Nome"
                            className="h-[41px] w-full text-[18px] bg-white font-poppins outline-none px-[10px]"
                            type="text"
                        />
                    </div>

                    <div className="w-full flex flex-col items-start gap-y-[10px]">
                        <p className="text-[18px] text-white font-poppins">WhatsApp</p>

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
                        <p className="text-[18px] text-white font-poppins">Mensagem</p>

                        <textarea
                            placeholder="Mensagem"
                            className="w-full min-h-[41px]  max-h-[200px]  text-[18px] bg-white font-poppins outline-none p-[10px]"
                            type="text"
                        />
                    </div>

                    <button className="bg-red-500 my-[10px] w-full rounded-[3px] outline-none h-[41px] font-bold text-[22px] text-white font-poppins">
                        ENVIAR
                    </button>
                </div>
            </div>
        </form>
    );
};
