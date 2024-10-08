'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Mail } from 'lucide-react';
import { LinkedIn } from './Linkedin';
import { Behance } from './Behance';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black text-white z-20">
        <div className="w-1/3">
          <div className="relative w-6 h-6 cursor-pointer" onClick={toggleMenu}>
            <Menu className={`w-6 h-6 absolute transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <X className={`w-6 h-6 absolute transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>
        
        <div className="w-1/3 flex justify-center">
          <Image src="/me.jpg" alt="Emil Lantz Logo" width={40} height={40} className="rounded-full" />
        </div>
        
        <div className="w-1/3 flex justify-end space-x-4">
          <a href="https://www.linkedin.com/in/bosco-leite-788559b7" aria-label="LinkedIn"><LinkedIn className="w-5 h-5" /></a>
          <a href="https://www.behance.net/boscoleite" aria-label="Behance"><Behance className="w-5 h-5 fill-white" /></a>
          <a href="#" aria-label="Email"><Mail className="w-5 h-5" /></a>
        </div>
      </nav>

      {/* Background for the menu */}
      <div className={`fixed inset-0 bg-black text-white z-10 flex flex-col items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ul className="text-center text-2xl space-y-8">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
