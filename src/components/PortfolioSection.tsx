import React from 'react';
import { Project } from './Project';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className=" flex flex-col min-h-screen py-20 px-6 bg-black items-center w-full">
      <h2 className="text-4xl md:text-6xl  font-bold text-orange-600">📁 Projetos</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        {/* Projetos */}
        {projetos.map((projeto, index) => (
          <Project
            key={index}
            nome={projeto.nome}
            tipo={projeto.tipo}
            foto={projeto.foto}
            url={projeto.url}
          />
        ))}
      </div>
    </section>
  );
};

const projetos: Array<{nome: string, tipo: string, foto: string, url: string}> = [{
  nome: "Cartilha agroecológica",
  tipo: "Identidade Visual",
  foto: "p1.jpg",
  url: "https://www.behance.net/gallery/133717169/Praticas-Agroecologicas/modules/1145251535"
},
{
  nome: "Poster Amazonia",
  tipo: "Design de Editorial",
  foto: "p3.jpg",
  url: "https://www.behance.net/gallery/134052531/Amazonia-em-Chamas-Amazon-forest-on-fire/modules/758747897"
},
{
  nome: "Relatório FAS 2023",
  tipo: "Naming, Logotipo, Rótulo",
  foto: "p2.jpg",
  url: "https://www.behance.net/gallery/200042079/Relatorio-de-Atividades-2023-FAS/modules/1139088867"
},
{
  nome: "Selo comemorativo",
  tipo: "Design Editorial",
  foto: "p4.jpg",
  url: "https://www.behance.net/gallery/209596329/Selo-Comemorativo/modules/1190838709" 
}];

export default PortfolioSection;
