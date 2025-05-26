import CTA1 from '../assets/CTA-image1.jpg';
import CTA2 from '../assets/CTA-image2.jpg';
import CTA3 from '../assets/CTA-image3.jpg';
import CTA4 from '../assets/CTA-image4.jpg';

import { FaCrosshairs } from 'react-icons/fa';
import { FaBinoculars } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa6';

export const CTAs = [
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

export const heroes = [
    {
        icon: <FaCrosshairs className="w-[50px] h-[50px] fill-[#2B7FFF]" />,
        title: 'Missão',
        text: "A missão da Ultra Construtora é 'Construir sonhos, transformar espaços e superar expectativas. Certificamos de entregar projetos de construção de alta qualidade, com foco na excelência, sustentabilidade e satisfação do cliente'.",
    },
    {
        icon: <FaBinoculars className="w-[50px] h-[50px] fill-[#2B7FFF]" />,
        title: 'Visão',
        text: "A visão da Daifa Construtora é 'Ser reconhecida como a construtora de referência na nossa região, destacando-nos pela inovação, qualidade superior e compromisso com a comunidade. Queremos ser líderes no setor, inspirando confiança e deixando um legado de excelência e sustentabilidade em cada empreendimento que realizamos.'",
    },
    {
        icon: <FaCertificate className="w-[50px] h-[50px] fill-[#2B7FFF]" />,
        title: 'Valores',
        text: 'Ética, Integridade, Compromisso com a Qualidade, Excelência no Serviço ao Cliente, Inovação, Sustentabilidade, Parceria com a Comunidade',
    },
];
