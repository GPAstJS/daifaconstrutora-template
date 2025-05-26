import { CTAs } from '../schemas/data';
import { CTA } from '../components/cta.jsx';

export const Services = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <p
                id="services"
                className="scroll-m-[8rem] font-montserrat  py-[25px] flex flex-row gap-x-[5px] text-left font-bold text-[1.5rem] sm:text-[40px] px-[10px]"
            >
                Nossos{' '}
                <span className="px-[5px] text-white bg-blue-500 rounded-[3px]">
                    Serviços
                </span>
            </p>
            <div className="w-full flex  flex-col md:flex-row ">
                <div className="w-full flex flex-col  px-0 md:px-[10px]  md:flex-row md:flex-wrap justify-center 2xl:justify-center  gap-x-[15px] gap-y-[15px]">
                    {CTAs.map((e, i) => {
                        return (
                            <CTA
                                key={i}
                                image={e.image}
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
