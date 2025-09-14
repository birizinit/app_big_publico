import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { supabase } from "../supabaseClient";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [operations, setOperations] = useState([]);
  const [kpis, setKpis] = useState({ day: 0, week: 0, month: 0, winRate: 0 });

  // Monitorar login/logout do Firebase
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

  // Buscar operações do Supabase
  async function fetchOperations(uid) {
    const { data, error } = await supabase
      .from("operations")
      .select("*")
      .eq("user_id", uid)
      .order("date", { ascending: false });

    if (!error) {
      setOperations(data);
      calculateKpis(data);
    }
  }

  // Calcular KPIs básicos
  function calculateKpis(data) {
    const today = new Date().toISOString().split("T")[0];

    const daily = data
      .filter((op) => op.date === today)
      .reduce((acc, op) => acc + op.value, 0);

    const positive = data.filter((op) => op.value > 0).length;
    const winRate = data.length > 0 ? (positive / data.length) * 100 : 0;

    setKpis({
      day: daily,
      week: 0, // você pode calcular por range de datas
      month: 0,
      winRate,
    });
  }

  // Adicionar nova operação
  async function addOperation(value, note) {
    if (!user) return;

    const { error } = await supabase.from("operations").insert([
      {
        user_id: user.uid, // UID do Firebase
        value,
        note,
        date: new Date().toISOString().split("T")[0],
      },
    ]);

    if (!error) fetchOperations(user.uid);
  }

  return (
    <div className="p-6 text-white">
      {user ? (
        <>
          <h1 className="text-2xl font-bold mb-4">
            Olá, {user.email}! 👋
          </h1>

          <div className="space-y-2 mb-6">
            <p>Lucro/Dia: R$ {kpis.day.toFixed(2)}</p>
            <p>Win Rate: {kpis.winRate.toFixed(1)}%</p>
          </div>

          <button
            onClick={() => addOperation(100, "Operação teste")}
            className="bg-yellow-600 px-4 py-2 rounded-lg"
          >
            Salvar Operação
          </button>

          <h2 className="text-xl font-semibold mt-6">Operações Recentes</h2>
          <ul className="space-y-2 mt-2">
            {operations.map((op) => (
              <li
                key={op.id}
                className="p-3 bg-gray-800 rounded-lg flex justify-between"
              >
                <span>{op.date}</span>
                <span
                  className={op.value > 0 ? "text-green-400" : "text-red-400"}
                >
                  {op.value > 0 ? "+" : ""}
                  R$ {op.value.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Por favor, faça login para ver seu dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
