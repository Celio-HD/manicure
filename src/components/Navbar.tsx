import { useState, useEffect } from 'react';

const Navbar = () => {
  // Estado para controlar se o menu hambúrguer está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);
  
  // Estado para guardar qual seção está visível na tela no momento
  const [activeSection, setActiveSection] = useState('hero');

  // Efeito para monitorar a rolagem da página e detectar a seção ativa
  useEffect(() => {
    const secoes = ['hero', 'features', 'criticas', 'footer'];
    
    const observerOptions = {
      root: null,
      // Considera que a seção está ativa quando ocupa pelo menos 60% da tela
      rootMargin: '-20% 0px -40% 0px', 
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Começa a observar cada seção que criamos no HTML
    secoes.forEach((id) => {
      const elemento = document.getElementById(id);
      if (elemento) observer.observe(elemento);
    });

    return () => observer.disconnect();
  }, []);

  // Lista dos links para evitar repetição de código no JSX
  const navLinks = [
    { id: 'hero', label: 'Início' },
    { id: 'features', label: 'Serviços' },
    { id: 'criticas', label: 'Nossas Críticas' },
    { id: 'footer', label: 'Contato' },
  ];

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* 1. LOGO */}
        <div className="text-xl font-bold text-pink-600">
          Studio Manicure
        </div>

        {/* 2. BOTÃO HAMBÚRGUER (Apenas visível no celular) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 md:hidden focus:outline-none relative"
          aria-label="Menu"
        >
          <span className={`w-7 h-0.5 bg-stone-800 rounded absolute transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'}`} />
          <span className={`w-7 h-0.5 bg-stone-800 rounded absolute transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`w-7 h-0.5 bg-stone-800 rounded absolute transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'}`} />
        </button>

        {/* 3. LINKS PARA COMPUTADOR (Com a linha dinâmica) */}
        <div className="hidden md:flex gap-8 font-medium text-stone-600">
          {navLinks.map((link) => {
            const isActived = activeSection === link.id;
            return (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`relative py-1 transition-colors duration-300 hover:text-pink-600
                  ${isActived ? 'text-pink-600 font-semibold' : 'text-stone-600'}
                `}
              >
                {link.label}
                {/* A linha preenchida embaixo do link ativo */}
                <span className={`
                  absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-300 ease-in-out
                  ${isActived ? 'w-full opacity-100' : 'w-0 opacity-0'}
                `} />
              </a>
            );
          })}
        </div>

      </div>

      {/* 4. MENU RESPONSIVO DO CELULAR */}
      <div className={`md:hidden bg-white border-t border-stone-100 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 px-4 py-6 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={() => setIsOpen(false)} 
              className={`transition-colors ${activeSection === link.id ? 'text-pink-600 font-semibold' : 'text-stone-600'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;