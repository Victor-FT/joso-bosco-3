import Image from 'next/image';
import React from 'react';

interface ProjectProps {
  srcBase: string;
  alt: string;
  nome: string;
  tipo: string;
  contagemFotos: number;
}

const Project: React.FC<ProjectProps> = ({ alt, srcBase, nome, contagemFotos, tipo }) => {
  const src = `${srcBase}/${contagemFotos}.png`;
  return (
    <div className="p-6 rounded-xl shadow-lg flex flex-col">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="mb-4 rounded-3xl object-contain w-full max-h-[400px] aspect-square bg-black border-2"
      />
      <div className=''>
        
        <h3 className="text-3xl font-bold text-white">{nome}</h3>
        <p className="font-semibold text-orange-600">{tipo}</p>
        <button
          className="mt-2 px-2 text-xs py-1 border-2 border-gray-600 text-gray-600 font-semibold rounded-3xl hover:bg-orange-500 hover:text-white transition-all"
          >
          Visualizar o projeto
        </button>
        </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className=" flex flex-col min-h-screen py-20 px-6 bg-black items-center w-full">
      <h2 className="text-3xl font-bold text-orange-600">📁 Projetos</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        {/* Projetos */}
        {projetos.map((projeto, index) => (
          <Project
            key={index}
            srcBase={projeto[0]}
            alt={projeto[1]}
            nome={projeto[2]}
            tipo={projeto[3]}
            contagemFotos={projeto[4]}
          />
        ))}
      </div>
    </section>
  );
};

const projetos: Array<[string, string, string, string, number]> = [
  ["/Projetos/CartilhaAgroecologica", "Cartilha agroecológica", "Cartilha agroecológica", "Identidade Visual", 6],
  ["/Projetos/PosterAmazonia", "Poster Amazonia", "Poster Amazonia", "Design de Editorial", 3],
  ["/Projetos/RelatorioFAS2023", "Relatório FAS 2023", "Relatório FAS 2023", "Naming, Logotipo, Rótulo", 1],
  ["/Projetos/SeloComemorativo", "Selo comemorativo", "Selo comemorativo", "Design Editorial", 0],
];

export default PortfolioSection;
