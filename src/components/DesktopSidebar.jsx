import React from 'react';
import { 
  User, 
  Trophy, 
  Award, 
  Newspaper, 
  Wallet, 
  Brain,
  LogOut
} from 'lucide-react';
import Logo from './Logo';

const DesktopSidebar = ({ activeTab, onTabChange, onLogout }) => {
  const tabs = [
    { id: 'perfil', label: 'Meu Perfil', icon: User },
    { id: 'ranking', label: 'Top 10 Traders', icon: Trophy },
    { id: 'conquistas', label: 'Conquistas & Recompensas', icon: Award },
    { id: 'noticias', label: 'Notícias', icon: Newspaper },
    { id: 'banca', label: 'Gestão de Banca', icon: Wallet },
    { id: 'ia', label: 'I.A.', icon: Brain },
  ];

  return (
    <div className="fixed left-0 top-0 bottom-0 z-40 w-64 bg-[#131721] border-r border-[#1E2430] hidden md:flex flex-col">
      <div className="p-6 border-b border-[#1E2430]">
        <Logo size="lg" />
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition-all duration-200 cursor-pointer ${
                isActive 
                  ? 'bg-[#C9A227] text-[#0B0B0F] drop-shadow-[0_0_20px_rgba(201,162,39,0.3)]' 
                  : 'text-white hover:bg-[#171B26]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Botão de Logout */}
      <div className="p-4 border-t border-[#1E2430]">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left transition-all duration-200 cursor-pointer text-[#FF6B6B] hover:bg-[#FF6B6B]/10"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </div>
  );
};

export default DesktopSidebar;

