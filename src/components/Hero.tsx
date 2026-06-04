import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-36 md:pb-28 bg-stone-50 font-sans flex items-center justify-center min-h-[85vh] relative overflow-hidden">
      
      {/* 🔮 MANCHAS ORGÂNICAS DE FUNDO (Para quebrar as linhas retas do site) */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-10%] w-96 h-96 bg-pink-100/50 rounded-full blur-3xl pointer-events-none animate-pulse duration-4000"></div>

      <div className="max-w-4xl w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Detalhe minimalista superior */}
        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100/60 px-4 py-1.5 rounded-full mb-8 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping"></span>
          <span className="text-purple-700 font-medium tracking-wide uppercase text-xs">
            Seu momento de autocuidado
          </span>
        </div>
        
        {/* Título com quebra leve e destaque fluido */}
        <h1 className="text-4xl md:text-6xl font-black text-stone-800 leading-tight tracking-tight max-w-2xl">
          Unhas impecáveis, <br />
          <span className="relative inline-block text-purple-600 mt-2">
            sua autoestima lá no alto.
          </span>
        </h1>
        
        {/* Parágrafo com mais respiro (leading-relaxed) */}
        <p className="text-base md:text-lg text-stone-600 max-w-xl mt-8 leading-relaxed font-light">
          Especialistas em alongamentos, unhas em gel e cuticulagem perfeita. 
          Venha vivenciar uma experiência única de beleza e bem-estar para as suas mãos.
        </p>
        
        {/* Botão com efeito de flutuação natural */}
        <div className="pt-10">
          <a 
            href="https://wa.me/+5511939603710" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-purple-200/80 transition-all duration-300 transform hover:-translate-y-1 hover:scale-102 tracking-wide"
          >
            Agende seu Horário no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;


