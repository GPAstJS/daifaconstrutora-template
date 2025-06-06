import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMailBulk } from 'react-icons/fa';
import { formSchema } from '../schemas/formSchema';

import { Input } from './input';

const inputs = [
    {
        name: 'nome',
        placeholder: 'Nome',
    },
    {
        name: 'email',
        placeholder: 'E-mail',
    },
    {
        name: 'whatsapp',
        placeholder: 'WhatsApp',
    },
    {
        name: 'message',
        placeholder: 'Mensagem',
    },
];

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });
    const onSubmit = (data) => {
        console.log(data);
        alert('E-mail para contato fictício enviado!');
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-full flex flex-col items-center justify-center bg-black py-[35px]"
        >
            <p
                id="form"
                className="scroll-m-[10rem] font-poppins text-[1.5rem] sm:text-[40px] font-bold bg-blue-500 px-[15px] rounded-[3px] text-white"
            >
                CONTATO
            </p>

            <div className="w-full  flex flex-col-reverse md:flex-col-reverse 2xl:flex-col-reverse items-center justify-center md:py-[15px]">
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

                        <div className="flex flex-row items-center justify-between gap-x-[10px]">
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

                <div className="w-full md:w-[95%]  lg:w-[65%] 2xl:w-[50%] gap-y-[15px] mt-[25px] flex flex-col  items-center justify-center px-[10px]">
                    {inputs.map((e) => {
                        return (
                            <Input
                                register={register}
                                name={e.name}
                                placeholder={e.placeholder}
                                errors={errors}
                            />
                        );
                    })}

                    <button
                        type="submit"
                        className="bg-blue-500 my-[10px] cursor-pointer w-full rounded-[3px] outline-none h-[41px] font-bold text-[22px] text-white font-poppins"
                    >
                        ENVIAR
                    </button>
                </div>
            </div>
        </form>
    );
};
