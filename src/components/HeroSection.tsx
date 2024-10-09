'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const rotatingTexts = [
  { text: "Design de embalagens 📦", color: "text-yellow-400" },
  { text: "Ilustração 🎨", color: "text-green-400" },
  { text: "Design visual 👁️", color: "text-blue-400" },
  { text: "Design de marca 📛", color: "text-red-400" },
  { text: "Design de logotipos 🔖", color: "text-purple-400" },
  { text: "Design publicitário 🎭", color: "text-pink-400" }
];

const HeroSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] flex flex-col justify-center items-center text-center text-white overflow-hidden font-yorkten-slab">
      <Image
        src="/background-image.jpg" // Replace with your actual image path
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="bg-gray-900"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60 z-[1]"></div>
      <div className="relative z-[1] w-full px-4">
        <p className="text-4xl mb-4">Olá! Sou designer com foco em</p>
        <div className="words-wrap h-32 relative">
          {rotatingTexts.map(({ text, color }, index) => (
            <h2
              key={text}
              className={`text-6xl font-bold absolute w-full transition-all duration-1000 ease-in-out ${color} ${
                index === currentTextIndex
                  ? 'transform-none opacity-100'
                  : index === (currentTextIndex + 1) % rotatingTexts.length
                  ? 'translate-y-full opacity-0'
                  : '-translate-y-full opacity-0'
              }`}
            >
              {text}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;