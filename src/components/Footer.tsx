const Footer = () => {
  return (
    <footer id="footer" className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/*SOBRE O STUDIO */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Studio Manicure</h3>
          <p className="text-sm leading-relaxed text-stone-400">
            Dedicadas a realçar a sua beleza natural através de cuidados impecáveis e personalizados para as suas unhas. Seu momento de relaxamento e autoestima.
          </p>
        </div>

        {/*CONTATO E HORÁRIOS */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-base">Contato & Horários</h4>
          <ul className="space-y-2 text-sm text-stone-400">
            <li>📍 Av. Principal, 1234 - Centro</li>
            <li>⏰ Terça a Sábado: 09h às 19h</li>
            <li>💬 WhatsApp: (11) 99999-9999</li>
          </ul>
        </div>

      </div>

      {/* LINHA INFERIOR DOS DIREITOS AUTORAIS */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
        <p>&copy; {new Date().getFullYear()} Studio Manicure. Todos os direitos reservados.</p>
        <p className="mt-1">Desenvolvido com React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;


