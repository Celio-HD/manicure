import { useRef } from 'react';

const Gallery = () => {
  const carrosselRef = useRef<HTMLDivElement>(null);

  // Lista de imagens profissionais do Unsplash para o portfólio
  const photos = [
    {
      url: "",
      alt: "Alongamento em Gel Natural"
    },
    {
      url: "",
      alt: "Unhas com Esmaltação Premium"
    },
    {
      url: "",
      alt: "Nail Art e Detalhes"
    },
    {
      url: "",
      alt: "Processo de Cuidados e Cutícula"
    },
    {
      url: "",
      alt: "Francesinha Perfeita"
    },
    {
      url: "",
      alt: "Blindagem de Unhas"
    }
  ];

  // Funções para controlar os botões de seta no computador
  const scrollEsquerda = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollDireita = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="galeria" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TOPO: TÍTULO E BOTÕES DE CONTROLE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">
              Nosso Portfólio
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-stone-800">
              Inspire-se no feed
            </h2>
          </div>
          
          {/* BOTÕES DAS SETAS (Escondidos no celular, porque lá arrasta com o dedo) */}
          <div className="hidden md:flex gap-4 self-center md:self-end">
            <button 
              onClick={scrollEsquerda}
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-colors cursor-pointer"
              aria-label="Ver anterior"
            >
              ←
            </button>
            <button 
              onClick={scrollDireita}
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-colors cursor-pointer"
              aria-label="Ver próximo"
            >
              →
            </button>
          </div>
        </div>

        {/* CONTAINER DO CARROSSEL */}
        <div 
          ref={carrosselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Remove a barra feia embaixo
        >
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="w-70 md:w-[320px] shrink-0 snap-start relative rounded-2xl overflow-hidden shadow-sm group aspect-square bg-stone-100"
            >
              {/* Imagem */}
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              
              {/* Efeito Hover */}
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;