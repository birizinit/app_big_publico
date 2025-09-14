import React, { useEffect, useState } from 'react';
import WSCard from '../components/WSCard';
import WSButton from '../components/WSButton';
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';
import { auth } from '../firebase'; // corrige o caminho
import { onAuthStateChanged } from 'firebase/auth';
import { supabase } from '../supabaseClient';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [operations, setOperations] = useState([]);
  const [kpis, setKpis] = useState({
    day: 0,
    week: 0,
    month: 0,
    winRate: 0,
  });

  // Monitorar login/logout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchOperations(currentUser.uid);
      } else {
        setUser(null);
        setOperations([]);
      }
    });
    return () => unsubscribe();
  }, []);

  // Buscar operações no Supabase
  async function fetchOperations(uid) {
    const { data, error } = await supabase
      .from('operations')
      .select('*')
      .eq('user_id', uid)
      .order('date', { ascending: false });

    if (!error) {
      setOperations(data);
      calculateKpis(data);
    }
  }

  // Calcular KPIs
  function calculateKpis(data) {
    const today = new Date().toISOString().split('T')[0];

    const daily = data
      .filter((op) => op.date === today)
      .reduce((acc, op) => acc + op.value, 0);

    const positive = data.filter((op) => op.value > 0).length;
    const winRate = data.length > 0 ? (positive / data.length) * 100 : 0;

    setKpis({
      day: daily,
      week: 0, // você pode calcular semana/mês se quiser
      month: 0,
      winRate,
    });
  }

  // Adicionar nova operação
  async function addOperation(value, note) {
    if (!user) return;

    const { error } = await supabase.from('operations').insert([
      {
        user_id: user.uid,
        value: parseFloat(value),
        note,
        date: new Date().toISOString().split('T')[0],
      },
    ]);

    if (!error) fetchOperations(user.uid);
  }

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
              day: 'numeric',
            })}
          </p>
        </div>
        <WSButton
          variant="primary"
          onClick={() => addOperation(100, 'Operação teste')}
        >
          Adicionar Operação
        </WSButton>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Lucro/Dia', value: kpis.day, trend: 'up', icon: DollarSign },
          { title: 'Lucro/Semana', value: kpis.week, trend: 'up', icon: TrendingUp },
          { title: 'Lucro/Mês', value: kpis.month, trend: 'up', icon: TrendingUp },
          { title: 'Win Rate', value: kpis.winRate, trend: 'up', icon: Percent },
        ].map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <WSCard key={index} variant="premium">
              <WSCard.Content>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#A9B0BC] mb-1">{kpi.title}</p>
                    <p className="text-2xl font-semibold text-white">
                      {typeof kpi.value === 'number'
                        ? kpi.value.toLocaleString('pt-BR', { style: kpi.title === 'Win Rate' ? 'percent' : 'currency', currency: 'BRL', minimumFractionDigits: 2 })
                        : kpi.value}
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

      {/* Recent Operations */}
      <WSCard>
        <WSCard.Header>
          <WSCard.Title>Operações Recentes</WSCard.Title>
          <WSCard.Description>Suas últimas operações registradas</WSCard.Description>
        </WSCard.Header>
        <WSCard.Content>
          <div className="space-y-4">
            {operations.map((op, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#171B26]/50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      op.value > 0 ? 'bg-[#43FFAF]' : 'bg-red-400'
                    }`}
                  ></div>
                  <div>
                    <p className="font-medium text-white">Operação #{String(index + 1).padStart(3, '0')}</p>
                    <p className="text-sm text-[#A9B0BC]">{op.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      op.value > 0 ? 'text-[#43FFAF]' : 'text-red-400'
                    }`}
                  >
                    {op.value > 0 ? '+' : ''}
                    R$ {op.value.toFixed(2)}
                  </p>
                  <p className="text-sm text-[#A9B0BC]">{op.value > 0 ? 'Win' : 'Loss'}</p>
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
