import Link from 'next/link';
import React from 'react';
import { WhatsApp } from './WhatsApp';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center gap-3 min-h-screen py-20 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-orange-600">📬 Vamos Conversar?</h2>
      <p className='text-2xl font-semibold text-white max-w-screen-md text-center'>
        Gostaria de conversar ou saber mais sobre meus projetos? Entre com contato comigo pelo WhatsApp!
        
      </p>
      <Link
        href="https://wa.me/559284694057"
        target="_blank"
        className="inline-flex items-center border-[2px] border-green-500 text-lg font-semibold px-8 py-3 rounded-full hover:bg-green-500 transition-colors shadow-md"
      >
        <WhatsApp className='mr-2 h-6 w-6' />
        Falar no WhatsApp
      </Link>
    </section>
  );
};

export default ContactSection;
