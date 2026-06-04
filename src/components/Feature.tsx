import { useState } from 'react';
// array com informacoes do servicos 
type Servico = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
};

const servicosDisponiveis: Servico[] = [
  {
    id: 1,
    nome: 'Manicure Tradicional',
    descricao: 'Corte, limpeza de cutículas e esmaltação básica.',
    preco: 45.0,
    imagem: '',
  },
  {
    id: 2,
    nome: 'Manicure Spa',
    descricao: 'Hidratação, esfoliação e finalização com esmalte.',
    preco: 75.0,
    imagem: '',
  },
  {
    id: 3,
    nome: 'Alongamento em Gel',
    descricao: 'Unhas alongadas com gel para maior durabilidade.',
    preco: 130.0,
    imagem: '',
  },
  {
    id: 4,
    nome: 'Esmaltação em Gel',
    descricao: 'Esmalte em gel com secagem em cabine LED.',
    preco: 50.0,
    imagem: '',
  },
];
// cards 
function ServicoCard({
  servico,
  jaNoCarrinho,
  onAdd,
}: {
  servico: Servico;
  jaNoCarrinho: boolean;
  onAdd: (servico: Servico) => void;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden flex flex-col">
      <img src={servico.imagem} alt={servico.nome} className="h-44 w-full object-cover" />
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{servico.nome}</h3>
          <p className="text-sm text-gray-500 mt-2">{servico.descricao}</p>
        </div>
        <div className="mt-6 space-y-4">
          <span className="text-2xl font-extrabold text-purple-600">R$ {servico.preco.toFixed(2)}</span>
          <button
            type="button"
            disabled={jaNoCarrinho}
            onClick={() => onAdd(servico)}
            className={`w-full rounded-2xl py-3 text-sm font-semibold transition ${
              jaNoCarrinho
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {jaNoCarrinho ? 'Adicionado' : 'Adicionar ao carrinho'}
          </button>
        </div>
      </div>
    </div>
  );
}
// carrinho
export default function CatalogoServicos() {
  const [carrinho, setCarrinho] = useState<Servico[]>([]);
  const [isCarrinhoAberto, setIsCarrinhoAberto] = useState(false);

  const adicionarAoCarrinho = (servico: Servico) => {
    if (!carrinho.some(item => item.id === servico.id)) {
      setCarrinho(prev => [...prev, servico]);
    }
  };

  const removerDoCarrinho = (id: number) => {
    setCarrinho(prev => prev.filter(item => item.id !== id));
  };

  const valorTotal = carrinho.reduce((total, item) => total + item.preco, 0);

  const enviarParaWhatsapp = () => {
    const numeroTelefone = '5511939603710';
    const listaServicos = carrinho
      .map(item => `- ${item.nome} (R$ ${item.preco.toFixed(2)})`)
      .join('\n');
    const mensagem = `Olá! Gostaria de agendar os seguintes serviços:\n${listaServicos}\n\nPor favor, quais horários e datas estão disponíveis?`;

    window.open(
      `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`,
      '_blank'
    );
  };

  return (
    <div className="relative min-h-screen bg-gray-50 p-6">
      {carrinho.length > 0 && (
        <button
          type="button"
          onClick={() => setIsCarrinhoAberto(true)}
          className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-white shadow-2xl hover:bg-purple-700"
          aria-label="Ver carrinho"
        >
          <span className="text-sm font-bold">{carrinho.length}</span>
        </button>
      )}

      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Serviços de Manicure</h1>
        <p className="text-gray-600 mt-2">Cards simples com imagem, nome, descrição, preço e botão de adicionar.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {servicosDisponiveis.map(servico => {
          const jaNoCarrinho = carrinho.some(item => item.id === servico.id);
          return (
            <ServicoCard
              key={servico.id}
              servico={servico}
              jaNoCarrinho={jaNoCarrinho}
              onAdd={adicionarAoCarrinho}
            />
          );
        })}
      </div>

      {isCarrinhoAberto && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Meu Carrinho</h2>
                <p className="text-sm text-gray-500">{carrinho.length} item(s)</p>
              </div>
              <button
                type="button"
                onClick={() => setIsCarrinhoAberto(false)}
                className="text-gray-500 hover:text-gray-800 text-2xl"
                aria-label="Fechar carrinho"
              >
                &times;
              </button>
            </div>
            <div className="p-6 space-y-4">
              {carrinho.length === 0 ? (
                <p className="text-gray-500">Seu carrinho está vazio.</p>
              ) : (
                carrinho.map(item => (
                  <div key={item.id} className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-4">
                    <div>
                      <p className="font-semibold text-gray-900">{item.nome}</p>
                      <p className="text-sm text-gray-500">R$ {item.preco.toFixed(2)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removerDoCarrinho(item.id)}
                      className="text-purple-600 hover:text-purple-800 text-sm font-semibold"
                    >
                      Remover
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-bold text-gray-900">Total: R$ {valorTotal.toFixed(2)}</p>
              <button
                type="button"
                onClick={enviarParaWhatsapp}
                className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
              >
                Entrar em contato
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}