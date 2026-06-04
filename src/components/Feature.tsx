export default function Feature() {
  return (
    <section id="features" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TITULO*/}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-800">
            Serviços pensados para o seu bem-estar
          </h2>
          <p className="text-stone-600">
            Trabalhamos com materiais de alta qualidade e técnicas modernas para garantir durabilidade e a saúde das suas unhas.
          </p>
        </div>

        {/* GRADE DE CARDS*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1*/}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">

              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-stone-800">Alongamento em Gel</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Unhas longas, resistentes e com aspecto 100% natural. Técnica moderna em gel ou fibra de vidro que respeita a saúde da sua unha.
              </p>
            </div>
            <span className="text-purple-600 font-medium text-sm pt-6 block">A partir de R$ 120</span>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-stone-800">Blindagem & Banho</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                A solução ideal para quem quer manter as unhas naturais fortes, evitando quebras e fazendo o esmalte durar por semanas sem descascar.
              </p>
            </div>
            <span className="text-purple-600 font-medium text-sm pt-6 block">A partir de R$ 80</span>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-stone-800">Manicure Premium</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Cuticulagem combinada perfeita, esmaltação com brilho intenso e uma hidratação profunda para deixar suas mãos impecáveis.
              </p>
            </div>
            <span className="text-purple-600 font-medium text-sm pt-6 block">A partir de R$ 40</span>
          </div>

        </div>

      </div>
    </section>
  );
}


