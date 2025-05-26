import { heroes } from '../schemas/data';
import { HeroSection } from './section';

import SeuConteudo from '../assets/image.jpg';

export const About = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <p
                id="about"
                className="scroll-m-[8rem] font-montserrat py-[25px] flex flex-row gap-x-[5px] text-left font-bold text-[1.5rem] sm:text-[40px] px-[10px]"
            >
                Sobre{' '}
                <span className="px-[5px] text-white bg-blue-500 rounded-[3px]">
                    Nós
                </span>
            </p>
            <div
                id="about"
                className="w-full flex  justify-center flex-col md:flex-col xl:flex-row   xl:justify-center xl:items-center container mx-auto gap-x-[35px]"
            >
                <div className=" flex flex-col items-center md:items-center xl:w-[45%]  p-[10px] gap-y-[10px]">
                    <img src={SeuConteudo} alt="Imagem aqui" />

                    <p className="font-bold font-poppins text-center md:text-left text-[1.5rem] sm:text-[30px]">
                        Entregamos sonhos e estilo de vida.
                    </p>

                    <p className="font-montserrat text-[1rem] sm:text-[18px] md:w-[90%] text-center md:text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Facilis repellat distinctio voluptatum numquam, natus dicta,
                        fuga laboriosam inventore soluta, qui consequatur fugiat sit
                        quae? Error, laudantium. Temporibus totam quisquam enim.
                    </p>
                </div>

                <div className="flex w-full flex-col xl:w-[50%] items-center md:items-center justify-center py-[50px] gap-y-[50px]">
                    {heroes.map((e, i) => {
                        return (
                            <HeroSection
                                key={i}
                                icon={e.icon}
                                title={e.title}
                                text={e.text}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
