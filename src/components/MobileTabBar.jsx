import React from 'react';
import { 
  User, 
  Trophy, 
  Award, 
  Newspaper, 
  Wallet, 
  Brain 
} from 'lucide-react';

const MobileTabBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'perfil', label: 'Perfil', icon: User },
    { id: 'ranking', label: 'Ranking', icon: Trophy },
    { id: 'conquistas', label: 'Conquistas', icon: Award },
    { id: 'noticias', label: 'Notícias', icon: Newspaper },
    { id: 'banca', label: 'Banca', icon: Wallet },
    { id: 'ia', label: 'I.A.', icon: Brain },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#131721]/80 backdrop-blur-md border-t border-[#1E2430] flex items-center justify-around h-20 px-2 py-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center min-w-0 flex-1 px-2 py-1 transition-all duration-200 cursor-pointer ${
              isActive ? 'text-[#C9A227]' : 'text-[#A9B0BC] hover:text-white'
            }`}
          >
            <Icon className={`w-6 h-6 mb-1 ${isActive ? 'drop-shadow-[0_0_10px_rgba(201,162,39,0.5)]' : ''}`} />
            <span className="text-xs font-medium truncate">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default MobileTabBar;

