import React, { useState } from 'react';
import WSCard from '../components/WSCard';
import WSButton from '../components/WSButton';
import { Calculator, PieChart, TrendingUp, AlertTriangle, DollarSign, Percent, Target, Shield } from 'lucide-react';

const GestãoBanca = () => {
  const [banca, setBanca] = useState(10000);
  const [risco, setRisco] = useState(2);
  const [stopLoss, setStopLoss] = useState(50);
  const [takeProfit, setTakeProfit] = useState(100);
  
  const calcularTamanhoOperacao = () => {
    return (banca * (risco / 100)) / stopLoss;
  };

  const calcularRR = () => {
    return takeProfit / stopLoss;
  };

  const estatisticas = {
    bancaAtual: banca,
    riscoPorOperacao: (banca * (risco / 100)).toFixed(2),
    tamanhoOperacao: calcularTamanhoOperacao().toFixed(2),
    ratioRR: calcularRR().toFixed(2),
    metaDiaria: (banca * 0.05).toFixed(2),
    metaMensal: (banca * 0.20).toFixed(2)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-[#C9A227]/10 rounded-xl">
            <PieChart className="w-8 h-8 text-[#C9A227]" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Gestão de Banca
          </h1>
        </div>
        <p className="text-[#A9B0BC] max-w-2xl mx-auto">
          Gerencie seu capital com precisão matemática. Calcule riscos, 
          defina metas e mantenha sua disciplina financeira.
        </p>
      </div>

      {/* Configurações de Banca */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WSCard>
          <WSCard.Header>
            <WSCard.Title className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#C9A227]" />
              Configurações da Banca
            </WSCard.Title>
            <WSCard.Description>
              Configure os parâmetros base para gestão de risco
            </WSCard.Description>
          </WSCard.Header>
          <WSCard.Content>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-white mb-2 block">
                  Banca Total (R$)
                </label>
                <input 
                  type="number" 
                  value={banca}
                  onChange={(e) => setBanca(Number(e.target.value))}
                  className="bg-[#171B26] border border-[#1E2430] rounded-2xl px-4 py-3 text-white placeholder:text-[#A9B0BC] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all duration-200 w-full"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-white mb-2 block">
                  Risco por Operação (%)
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.1"
                    value={risco}
                    onChange={(e) => setRisco(Number(e.target.value))}
                    className="flex-1 h-2 bg-[#171B26] rounded-lg appearance-none cursor-pointer slider"
                  />
                  <span className="text-[#C9A227] font-semibold min-w-[60px]">
                    {risco}%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Stop Loss (R$)
                  </label>
                  <input 
                    type="number" 
                    value={stopLoss}
                    onChange={(e) => setStopLoss(Number(e.target.value))}
                    className="bg-[#171B26] border border-[#1E2430] rounded-2xl px-4 py-3 text-white placeholder:text-[#A9B0BC] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all duration-200 w-full"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Take Profit (R$)
                  </label>
                  <input 
                    type="number" 
                    value={takeProfit}
                    onChange={(e) => setTakeProfit(Number(e.target.value))}
                    className="bg-[#171B26] border border-[#1E2430] rounded-2xl px-4 py-3 text-white placeholder:text-[#A9B0BC] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all duration-200 w-full"
                  />
                </div>
              </div>
            </div>
          </WSCard.Content>
        </WSCard>

        {/* Estatísticas Calculadas */}
        <WSCard variant="premium">
          <WSCard.Header>
            <WSCard.Title className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#C9A227]" />
              Estatísticas Calculadas
            </WSCard.Title>
            <WSCard.Description>
              Valores calculados automaticamente
            </WSCard.Description>
          </WSCard.Header>
          <WSCard.Content>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-[#0E1116] rounded-xl">
                <span className="text-[#A9B0BC]">Tamanho da Operação</span>
                <span className="font-semibold text-[#C9A227]">
                  R$ {estatisticas.tamanhoOperacao}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-[#0E1116] rounded-xl">
                <span className="text-[#A9B0BC]">Risco por Operação</span>
                <span className="font-semibold text-[#FF6B6B]">
                  R$ {estatisticas.riscoPorOperacao}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-[#0E1116] rounded-xl">
                <span className="text-[#A9B0BC]">Ratio R:R</span>
                <span className="font-semibold text-[#43FFAF]">
                  1:{estatisticas.ratioRR}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-[#0E1116] rounded-xl">
                <span className="text-[#A9B0BC]">Meta Diária (5%)</span>
                <span className="font-semibold text-[#C9A227]">
                  R$ {estatisticas.metaDiaria}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-[#0E1116] rounded-xl">
                <span className="text-[#A9B0BC]">Meta Mensal (20%)</span>
                <span className="font-semibold text-[#C9A227]">
                  R$ {estatisticas.metaMensal}
                </span>
              </div>
            </div>
          </WSCard.Content>
        </WSCard>
      </div>

      {/* Regras de Gestão */}
      <WSCard>
        <WSCard.Header>
          <WSCard.Title className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#C9A227]" />
            Regras de Gestão de Risco
          </WSCard.Title>
          <WSCard.Description>
            Diretrizes essenciais para preservar seu capital
          </WSCard.Description>
        </WSCard.Header>
        <WSCard.Content>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#0E1116] rounded-xl p-4 border border-[#1E2430]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#43FFAF]/10 rounded-lg">
                  <Percent className="w-5 h-5 text-[#43FFAF]" />
                </div>
                <h4 className="font-semibold text-white">Risco Máximo</h4>
              </div>
              <p className="text-sm text-[#A9B0BC] mb-2">
                Nunca arrisque mais de 2% da banca por operação
              </p>
              <div className="text-xs text-[#667085]">
                Atual: {risco}%
              </div>
            </div>

            <div className="bg-[#0E1116] rounded-xl p-4 border border-[#1E2430]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#C9A227]/10 rounded-lg">
                  <Target className="w-5 h-5 text-[#C9A227]" />
                </div>
                <h4 className="font-semibold text-white">Ratio R:R</h4>
              </div>
              <p className="text-sm text-[#A9B0BC] mb-2">
                Mantenha sempre ratio mínimo de 1:2
              </p>
              <div className="text-xs text-[#667085]">
                Atual: 1:{estatisticas.ratioRR}
              </div>
            </div>

            <div className="bg-[#0E1116] rounded-xl p-4 border border-[#1E2430]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#FF9500]/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FF9500]" />
                </div>
                <h4 className="font-semibold text-white">Stop Loss</h4>
              </div>
              <p className="text-sm text-[#A9B0BC] mb-2">
                Sempre defina stop loss antes de entrar
              </p>
              <div className="text-xs text-[#667085]">
                Definido: R$ {stopLoss}
              </div>
            </div>

            <div className="bg-[#0E1116] rounded-xl p-4 border border-[#1E2430]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#6FD3FF]/10 rounded-lg">
                  <DollarSign className="w-5 h-5 text-[#6FD3FF]" />
                </div>
                <h4 className="font-semibold text-white">Disciplina</h4>
              </div>
              <p className="text-sm text-[#A9B0BC] mb-2">
                Siga sempre seu plano de trading
              </p>
              <div className="text-xs text-[#667085]">
                Sem exceções
              </div>
            </div>
          </div>
        </WSCard.Content>
      </WSCard>

      {/* Calculadora Rápida */}
      <WSCard>
        <WSCard.Header>
          <WSCard.Title className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#C9A227]" />
            Calculadora Rápida
          </WSCard.Title>
          <WSCard.Description>
            Calcule rapidamente o tamanho ideal para sua próxima operação
          </WSCard.Description>
        </WSCard.Header>
        <WSCard.Content>
          <div className="bg-[#0E1116] rounded-xl p-6 border border-[#1E2430]">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C9A227] mb-2">
                R$ {estatisticas.tamanhoOperacao}
              </div>
              <p className="text-[#A9B0BC] mb-4">
                Tamanho recomendado para próxima operação
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-[#A9B0BC]">Banca</div>
                  <div className="font-semibold text-white">R$ {banca.toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-[#A9B0BC]">Risco</div>
                  <div className="font-semibold text-[#FF6B6B]">{risco}%</div>
                </div>
                <div className="text-center">
                  <div className="text-[#A9B0BC]">Stop Loss</div>
                  <div className="font-semibold text-[#FF6B6B]">R$ {stopLoss}</div>
                </div>
                <div className="text-center">
                  <div className="text-[#A9B0BC]">Take Profit</div>
                  <div className="font-semibold text-[#43FFAF]">R$ {takeProfit}</div>
                </div>
              </div>
            </div>
          </div>
        </WSCard.Content>
        <WSCard.Footer>
          <WSButton variant="primary" className="ml-auto">
            Aplicar na Próxima Operação
          </WSButton>
        </WSCard.Footer>
      </WSCard>
    </div>
  );
};

export default GestãoBanca;

