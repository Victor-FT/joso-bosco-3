import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 md:py-6 bg-zinc-950 text-white text-center">
      <p className="px-4 text-sm md:text-base">
        © {new Date().getFullYear()} João Bosco. All Rights Reserved.
      </p>
      <p className="px-4 mt-2 text-sm md:text-base">
        Feito com 💜 por{' '}
        <Link href="https://site.iappbr.com" target="_blank" rel="noreferrer">
          <span className="text-[#7F5C95] font-semibold hover:underline">
            iApp
          </span>
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;