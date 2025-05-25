import './App.css';
import { CTA } from './components/cta';
import { Nav } from './components/nav';

import SeuConteudo from './assets/image.jpg';
import { HeroSection } from './components/section';
import { Form } from './components/form';
import { Carousel } from './components/carousel/carousel';

import CTA1 from './assets/CTA-image1.jpg';
import CTA2 from './assets/CTA-image2.jpg';
import CTA3 from './assets/CTA-image3.jpg';
import CTA4 from './assets/CTA-image4.jpg';

import Logo from './assets/ultraconstrutora-logo.png';

function App() {
    const CTAs = [
        {
            image: CTA1,
            title: 'Construção Residencial',
            text: 'Construção comercial refere-se a projetos voltados para fins comerciais, como escritórios, lojas, restaurantes e hotéis. O foco é criar espaços funcionais, atrativos e adequados às operações do negócio.',
        },
        {
            image: CTA2,
            title: 'Construção Comercial',
            text: 'Construção comercial envolve edificações para fins empresariais, como escritórios, lojas, restaurantes e hotéis, com foco em eficiência operacional e atratividade para clientes e funcionários.',
        },
        {
            image: CTA3,
            title: 'Reforma e Ampliação',
            text: 'Reforma e ampliação envolvem a renovação, modernização ou expansão de edificações existentes, incluindo melhorias em instalações, infraestrutura e acabamentos, para atender a novas necessidades dos usuários.',
        },
        {
            image: CTA4,
            title: 'Gestão de Obras',
            text: 'Gestão de obra é o planejamento, coordenação e supervisão de todas as etapas de um projeto de construção. Envolve o controle de custos, prazos, recursos humanos e materiais, com o objetivo de garantir a conclusão do projeto dentro dos parâmetros de qualidade, segurança e prazo estabelecidos.',
        },
    ];

    return (
        <main id="inicio" className="w-full  flex flex-col  2xl:items-center ">
            <header className="w-full h-[140px] bg-white fixed z-10">
                <Nav />
            </header>

            <Carousel />

            <p
                id="services"
                className="font-montserrat py-[25px] flex flex-row gap-x-[5px] text-left font-bold text-[1.5rem] sm:text-[40px] px-[10px]"
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

            <div
                id="about"
                className="w-full flex  justify-center flex-col md:flex-col xl:flex-row   xl:justify-center xl:items-center container mx-auto gap-x-[35px]"
            >
                <div className=" flex flex-col items-start md:items-center xl:w-[45%]  p-[10px] gap-y-[10px]">
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
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                </div>
            </div>

            <Form />

            <footer className="w-full  flex flex-col border-t-[2px]  items-center justify-center mb-[25px]">
                <img
                    className="text-white w-[125px] h-[125px] sm:w-[200px] sm:h-[200px]  font-bold "
                    src={Logo}
                    alt="Logo Here"
                />

                <p className="font-poppins text-[14px] sm:text-[1rem] text-black font-bold">
                    Ultra Construtora - Todos os Direitos Reservados® 2025
                </p>
            </footer>
        </main>
    );
}

export default App;
