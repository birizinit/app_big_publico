import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import IA from './pages/IA';
import GestãoBanca from './pages/GestãoBanca';
import Ranking from './pages/Ranking';
import Login from './pages/Login';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('perfil');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Se não estiver autenticado, mostrar tela de login
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'perfil':
        return <Dashboard />;
      case 'ranking':
        return <Ranking />;
      case 'conquistas':
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Conquistas & Recompensas</h2>
              <p className="text-[#A9B0BC]">Em desenvolvimento...</p>
            </div>
          </div>
        );
      case 'noticias':
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Notícias</h2>
              <p className="text-[#A9B0BC]">Em desenvolvimento...</p>
            </div>
          </div>
        );
      case 'banca':
        return <GestãoBanca />;
      case 'ia':
        return <IA />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab} onLogout={handleLogout}>
      {renderContent()}
    </Layout>
  );
}

export default App;
