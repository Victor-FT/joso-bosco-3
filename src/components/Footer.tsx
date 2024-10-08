import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      <p>© {new Date().getFullYear()} João Bosco. All Rights Reserved. Feito com 💜 por <Link href={"https://site.iappbr.com"} target="_blank" rel="noreferrer">
        <span className="text-purple-700 font-semibold hover:underline">
          iApp
          </span>
      </Link>.</p>
    </footer>
  );
};

export default Footer;
