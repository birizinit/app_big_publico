import React from 'react';
import WSCard from '../components/WSCard';
import WSButton from '../components/WSButton';
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';

const Dashboard = () => {
  const kpiData = [
    {
      title: 'Lucro/Dia',
      value: 'R$ 1.247,50',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Lucro/Semana',
      value: 'R$ 8.732,10',
      change: '+8.3%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Lucro/Mês',
      value: 'R$ 34.567,80',
      change: '+15.7%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Win Rate',
      value: '73.2%',
      change: '+2.1%',
      trend: 'up',
      icon: Percent
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Bom dia, Trader! 👋
          </h1>
          <p className="text-[#A9B0BC]">
            {new Date().toLocaleDateString('pt-BR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        <WSButton variant="primary">
          Adicionar Operação
        </WSButton>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <WSCard key={index} variant="premium">
              <WSCard.Content>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#A9B0BC] mb-1">
                      {kpi.title}
                    </p>
                    <p className="text-2xl font-semibold text-white">
                      {kpi.value}
                    </p>
                    <p className={`text-sm flex items-center gap-1 mt-1 ${
                      kpi.trend === 'up' ? 'text-[#43FFAF]' : 'text-red-400'
                    }`}>
                      {kpi.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      {kpi.change}
                    </p>
                  </div>
                  <div className="p-3 bg-[#C9A227]/10 rounded-xl">
                    <Icon className="w-6 h-6 text-[#C9A227]" />
                  </div>
                </div>
              </WSCard.Content>
            </WSCard>
          );
        })}
      </div>

      {/* Quick Add Form */}
      <WSCard>
        <WSCard.Header>
          <WSCard.Title>Adicionar resultado de hoje</WSCard.Title>
          <WSCard.Description>
            Registre rapidamente o resultado da sua operação
          </WSCard.Description>
        </WSCard.Header>
        <WSCard.Content>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Data
              </label>
              <input 
                type="date" 
                className="bg-[#171B26] border border-[#1E2430] rounded-2xl px-4 py-3 text-white placeholder:text-[#A9B0BC] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all duration-200 w-full"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Valor (R$)
              </label>
              <input 
                type="number" 
                className="bg-[#171B26] border border-[#1E2430] rounded-2xl px-4 py-3 text-white placeholder:text-[#A9B0BC] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all duration-200 w-full"
                placeholder="0,00"
                step="0.01"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white mb-2 block">
                Observação
              </label>
              <input 
                type="text" 
                className="bg-[#171B26] border border-[#1E2430] rounded-2xl px-4 py-3 text-white placeholder:text-[#A9B0BC] focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all duration-200 w-full"
                placeholder="Opcional"
              />
            </div>
          </div>
        </WSCard.Content>
        <WSCard.Footer>
          <WSButton variant="primary" className="ml-auto">
            Salvar Operação
          </WSButton>
        </WSCard.Footer>
      </WSCard>

      {/* Recent Operations */}
      <WSCard>
        <WSCard.Header>
          <WSCard.Title>Operações Recentes</WSCard.Title>
          <WSCard.Description>
            Suas últimas operações registradas
          </WSCard.Description>
        </WSCard.Header>
        <WSCard.Content>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#171B26]/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#43FFAF] rounded-full"></div>
                  <div>
                    <p className="font-medium text-white">
                      Operação #{String(index + 1).padStart(3, '0')}
                    </p>
                    <p className="text-sm text-[#A9B0BC]">
                      Hoje, 14:30
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#43FFAF]">
                    +R$ {(Math.random() * 1000 + 100).toFixed(2)}
                  </p>
                  <p className="text-sm text-[#A9B0BC]">
                    Win
                  </p>
                </div>
              </div>
            ))}
          </div>
        </WSCard.Content>
      </WSCard>
    </div>
  );
};

export default Dashboard;

