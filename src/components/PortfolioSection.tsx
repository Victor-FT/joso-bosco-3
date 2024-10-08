import React from 'react';
import { Project } from './Project';

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
