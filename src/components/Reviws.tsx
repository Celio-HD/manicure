const Reviews = () => {
  return (
    <section id="criticas" className="py-20 bg-purple-50/50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">
            Depoimentos reais
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-800">
            O que as nossas clientes dizem
          </h2>
        </div>

        {/* GRADE DE AVALIAÇÕES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* COMENTÁRIO 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Estrelinhas */}
              <div className="text-amber-400 text-lg">★★★★★</div>
              <p className="text-stone-600 italic leading-relaxed text-sm">
                "Melhor alongamento em gel que já fiz na vida! Antes fazia em outros lugares e quebrava em uma semana, agora minhas unhas duram o mês inteirinho impecáveis."
              </p>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 text-base">Amanda Silva</h4>
              <span className="text-xs text-stone-400">Cliente há 6 meses</span>
            </div>
          </div>

          {/* COMENTÁRIO 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-amber-400 text-lg">★★★★★</div>
              <p className="text-stone-600 italic leading-relaxed text-sm">
                "O ambiente é maravilhoso, super limpo e as meninas são extremamente cuidadosas. Virou o meu momento favorito de autocuidado na semana!"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 text-base">Beatriz Ramos</h4>
              <span className="text-xs text-stone-400">Cliente VIP</span>
            </div>
          </div>

          {/* COMENTÁRIO 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-amber-400 text-lg">★★★★★</div>
              <p className="text-stone-600 italic leading-relaxed text-sm">
                "A cuticulagem combinada que elas fazem é perfeita e o acabamento não tem igual. O esmalte não descasca por nada. Não troco esse estúdio por nenhum outro!"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 text-base">Camila Oliveira</h4>
              <span className="text-xs text-stone-400">Cliente há 1 ano</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Reviews;

