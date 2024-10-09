import { Book, Camera, FileText, LayoutGrid, LineChart, Package, Palette, PenTool, Share2, Signpost } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-black text-white flex flex-col gap-40 overflow-x-hidden">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 w-full items-center px-4 lg:px-0">
        {companies.map((company, index) => (
          <div key={index} className="w-1/2 sm:w-1/3 md:w-auto flex justify-center items-center p-2">
            <Image
              src={`/${company}`}
              alt={`${company}`}
              width={150}
              height={80}
              className="w-full h-auto max-w-[150px] opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center md:pl-40 px-4 md:px-0">
      <div>
        <div className="max-w-3xl text-left">
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Olá, sou o João e abordo o design de forma <span className='italic'>holística.</span>
          </h3>
          <div className="mt-4">
            <p className="text-gray-400 font-semibold">
              Usando uma abordagem transdisciplinar de design, sou capaz de deixar para trás os limites de um método convencional, combinando fundamentos de UX com anos de experiência em Marketing de Produto, Análise Digital, Pesquisa de Mercado e Gestão de Marca.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex flex-wrap">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-zinc-900 text-white rounded-full p-4 mr-4 mb-4 hover:scale-110 transition-transform duration-300 justify-center gap-2">
                  <feature.icon className="w-4 h-4text-white" />
                  <p className="text-sm text-white">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden md:flex w-[120%] h-[300px] sm:h-[400px] md:h-[450px] bg-[rgba(114,0,255,.23)] bg-gradient-to-b from-[#f6b918] to-[#442300] opacity-100 border border-black rounded-tl-[100%] rounded-bl-[100%] sm:rounded-tl-[25vw] sm:rounded-bl-[25vw] justify-start items-center md:ml-[40px] mt-8 md:mt-0">
        <Image
          src="/606f7866b25077431c7531d9_7-p-800.png"
          alt="Illustration of office with cat and computers"
          width={750}
          height={400}
          objectFit='cover'
          className='mb-[0px] sm:mb-[70px] md:mb-[40px]'
        />
      </div>
    </div>
    <div className="flex flex-col gap-12 md:gap-24 w-full items-center justify-center px-4 md:px-0">
        <div className='flex flex-col gap-4 w-full items-center justify-center'>
          <h2 className='text-4xl md:text-6xl font-bold text-orange-600 text-center'>Como Faço?</h2>
          <p className='text-xl md:text-2xl text-gray-400 font-semibold text-center px-4 md:px-8 max-w-5xl'>
          Utilizo abordagem que coloca as pessoas no centro do processo de criação, buscando soluções inovadoras e eficazes. E, consiste nas seguintes etapas:
          </p>
        </div>
        <div className="w-full max-w-[900px]">
          <Image
            src={`/metodologia.png`}
            alt="Metodologia"
            width={900}
            height={550}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 md:gap-12 w-full items-center justify-center mt-12 md:mt-24">       
      <h2 className='text-xl font-bold text-orange-600'>Ferramentas</h2>
      <div className="flex flex-wrap gap-8 md:gap-12 w-full items-center justify-center px-4 md:px-0">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="w-16 md:w-20 transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3"
          >
            <Image
              src={`/${tool}`}
              alt={`${tool}`}
              width={80}
              height={80}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </div>
        
    </section>
  );
};

const features = [
  { icon: Palette, title: 'Identidade visual' },
  { icon: LayoutGrid, title: 'Mídia impressa ou digital' },
  { icon: LineChart, title: 'Infográficos' },
  { icon: FileText, title: 'Papelaria' },
  { icon: Camera, title: 'Fotografia' },
  { icon: Book, title: 'Publicações' },
  { icon: Signpost, title: 'Sinalização' },
  { icon: Package, title: 'Embalagens' },
  { icon: PenTool, title: 'Ilustrações' },
  { icon: Share2, title: 'Redes sociais' },
];

const companies = [
  "embrapa.png",
  "fas.png",
  "ens_uea.png",
  "consultech.png",
  "caritas.png",
]

const tools = [
  "illustrator.png",
  "photoshop.png",
  "indesign.png",
  "acrobat.png",
  "miro.png",
  "figma.png",
]

export default AboutSection;
