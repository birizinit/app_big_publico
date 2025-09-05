import React, { useState } from 'react';
import WSCard from '../components/WSCard';
import WSButton from '../components/WSButton';
import { Trophy, Crown, Medal, TrendingUp, Users, Star, Award, Target } from 'lucide-react';

const Ranking = () => {
  const [periodo, setPeriodo] = useState('mensal');
  
  const rankingData = [
    {
      posicao: 1,
      nome: 'Alexandre Silva',
      avatar: '👑',
      lucro: 'R$ 45.678,90',
      percentual: '+127.3%',
      operacoes: 89,
      winRate: '78.2%',
      badge: 'Lenda'
    },
    {
      posicao: 2,
      nome: 'Marina Costa',
      avatar: '🥇',
      lucro: 'R$ 38.234,50',
      percentual: '+98.7%',
      operacoes: 76,
      winRate: '74.1%',
      badge: 'Mestre'
    },
    {
      posicao: 3,
      nome: 'Carlos Mendes',
      avatar: '🥈',
      lucro: 'R$ 32.567,80',
      percentual: '+89.4%',
      operacoes: 82,
      winRate: '71.8%',
      badge: 'Expert'
    },
    {
      posicao: 4,
      nome: 'Ana Rodrigues',
      avatar: '🥉',
      lucro: 'R$ 28.945,20',
      percentual: '+76.2%',
      operacoes: 65,
      winRate: '69.5%',
      badge: 'Pro'
    },
    {
      posicao: 5,
      nome: 'Roberto Lima',
      avatar: '⭐',
      lucro: 'R$ 24.123,40',
      percentual: '+68.9%',
      operacoes: 71,
      winRate: '67.3%',
      badge: 'Avançado'
    },
    {
      posicao: 6,
      nome: 'Juliana Santos',
      avatar: '💎',
      lucro: 'R$ 21.876,30',
      percentual: '+62.1%',
      operacoes: 58,
      winRate: '65.8%',
      badge: 'Intermediário'
    },
    {
      posicao: 7,
      nome: 'Pedro Oliveira',
      avatar: '🚀',
      lucro: 'R$ 19.234,70',
      percentual: '+55.7%',
      operacoes: 63,
      winRate: '63.2%',
      badge: 'Intermediário'
    },
    {
      posicao: 8,
      nome: 'Fernanda Alves',
      avatar: '⚡',
      lucro: 'R$ 17.567,90',
      percentual: '+49.8%',
      operacoes: 54,
      winRate: '61.1%',
      badge: 'Iniciante+'
    },
    {
      posicao: 9,
      nome: 'Lucas Ferreira',
      avatar: '🎯',
      lucro: 'R$ 15.432,10',
      percentual: '+43.2%',
      operacoes: 49,
      winRate: '58.9%',
      badge: 'Iniciante+'
    },
    {
      posicao: 10,
      nome: 'Camila Souza',
      avatar: '🌟',
      lucro: 'R$ 13.789,50',
      percentual: '+38.6%',
      operacoes: 45,
      winRate: '56.7%',
      badge: 'Iniciante'
    }
  ];

  const getBadgeColor = (badge) => {
    const colors = {
      'Lenda': 'bg-gradient-to-r from-[#C9A227] to-[#D4AF37] text-[#0B0B0F]',
      'Mestre': 'bg-gradient-to-r from-[#43FFAF] to-[#6FD3FF] text-[#0B0B0F]',
      'Expert': 'bg-gradient-to-r from-[#FF6B6B] to-[#FF9500] text-white',
      'Pro': 'bg-gradient-to-r from-[#6FD3FF] to-[#43FFAF] text-[#0B0B0F]',
      'Avançado': 'bg-[#C9A227]/20 text-[#C9A227] border border-[#C9A227]/30',
      'Intermediário': 'bg-[#43FFAF]/20 text-[#43FFAF] border border-[#43FFAF]/30',
      'Iniciante+': 'bg-[#6FD3FF]/20 text-[#6FD3FF] border border-[#6FD3FF]/30',
      'Iniciante': 'bg-[#A9B0BC]/20 text-[#A9B0BC] border border-[#A9B0BC]/30'
    };
    return colors[badge] || colors['Iniciante'];
  };

  const getPosicaoIcon = (posicao) => {
    switch (posicao) {
      case 1: return <Crown className="w-6 h-6 text-[#C9A227]" />;
      case 2: return <Medal className="w-6 h-6 text-[#C0C0C0]" />;
      case 3: return <Award className="w-6 h-6 text-[#CD7F32]" />;
      default: return <span className="text-lg font-bold text-[#A9B0BC]">#{posicao}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-[#C9A227]/10 rounded-xl">
            <Trophy className="w-8 h-8 text-[#C9A227]" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Top 10 Traders
          </h1>
        </div>
        <p className="text-[#A9B0BC] max-w-2xl mx-auto">
          Conheça os melhores traders da comunidade WallStreet. 
          Inspire-se com suas estratégias e performance excepcional.
        </p>
      </div>

      {/* Filtros de Período */}
      <div className="flex justify-center">
        <div className="bg-[#131721] rounded-2xl p-2 border border-[#1E2430]">
          {['diario', 'semanal', 'mensal', 'anual'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriodo(p)}
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                periodo === p
                  ? 'bg-[#C9A227] text-[#0B0B0F] shadow-lg'
                  : 'text-[#A9B0BC] hover:text-white hover:bg-[#1E2430]'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <WSCard>
          <WSCard.Content>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#C9A227]/10 rounded-xl">
                <Users className="w-6 h-6 text-[#C9A227]" />
              </div>
              <div>
                <p className="text-sm text-[#A9B0BC]">Traders Ativos</p>
                <p className="text-2xl font-semibold text-white">1.247</p>
              </div>
            </div>
          </WSCard.Content>
        </WSCard>

        <WSCard>
          <WSCard.Content>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#43FFAF]/10 rounded-xl">
                <TrendingUp className="w-6 h-6 text-[#43FFAF]" />
              </div>
              <div>
                <p className="text-sm text-[#A9B0BC]">Lucro Médio</p>
                <p className="text-2xl font-semibold text-white">R$ 8.432</p>
              </div>
            </div>
          </WSCard.Content>
        </WSCard>

        <WSCard>
          <WSCard.Content>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#6FD3FF]/10 rounded-xl">
                <Target className="w-6 h-6 text-[#6FD3FF]" />
              </div>
              <div>
                <p className="text-sm text-[#A9B0BC]">Win Rate Médio</p>
                <p className="text-2xl font-semibold text-white">64.7%</p>
              </div>
            </div>
          </WSCard.Content>
        </WSCard>

        <WSCard>
          <WSCard.Content>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#FF9500]/10 rounded-xl">
                <Star className="w-6 h-6 text-[#FF9500]" />
              </div>
              <div>
                <p className="text-sm text-[#A9B0BC]">Operações</p>
                <p className="text-2xl font-semibold text-white">12.8k</p>
              </div>
            </div>
          </WSCard.Content>
        </WSCard>
      </div>

      {/* Ranking List */}
      <WSCard>
        <WSCard.Header>
          <WSCard.Title className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#C9A227]" />
            Ranking {periodo.charAt(0).toUpperCase() + periodo.slice(1)}
          </WSCard.Title>
          <WSCard.Description>
            Os 10 melhores traders do período selecionado
          </WSCard.Description>
        </WSCard.Header>
        <WSCard.Content>
          <div className="space-y-3">
            {rankingData.map((trader, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 hover:border-[#C9A227]/30 ${
                  trader.posicao <= 3
                    ? 'bg-gradient-to-r from-[#C9A227]/5 to-transparent border-[#C9A227]/20'
                    : 'bg-[#0E1116] border-[#1E2430]'
                }`}
              >
                {/* Posição */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#131721] border border-[#1E2430]">
                  {getPosicaoIcon(trader.posicao)}
                </div>

                {/* Avatar e Nome */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="text-2xl">{trader.avatar}</div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white truncate">
                      {trader.nome}
                    </h3>
                    <div className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${getBadgeColor(trader.badge)}`}>
                      {trader.badge}
                    </div>
                  </div>
                </div>

                {/* Estatísticas */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="text-[#A9B0BC]">Lucro</p>
                    <p className="font-semibold text-[#43FFAF]">{trader.lucro}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#A9B0BC]">Retorno</p>
                    <p className="font-semibold text-[#C9A227]">{trader.percentual}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#A9B0BC]">Win Rate</p>
                    <p className="font-semibold text-white">{trader.winRate}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#A9B0BC]">Operações</p>
                    <p className="font-semibold text-[#6FD3FF]">{trader.operacoes}</p>
                  </div>
                </div>

                {/* Mobile Stats */}
                <div className="md:hidden text-right">
                  <p className="font-semibold text-[#43FFAF] text-sm">{trader.lucro}</p>
                  <p className="text-xs text-[#C9A227]">{trader.percentual}</p>
                </div>
              </div>
            ))}
          </div>
        </WSCard.Content>
        <WSCard.Footer>
          <div className="flex items-center justify-between w-full">
            <p className="text-sm text-[#A9B0BC]">
              Atualizado há 5 minutos
            </p>
            <WSButton variant="secondary">
              Ver Ranking Completo
            </WSButton>
          </div>
        </WSCard.Footer>
      </WSCard>
    </div>
  );
};

export default Ranking;

