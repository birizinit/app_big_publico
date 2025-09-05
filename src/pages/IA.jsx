import React, { useState } from 'react';
import WSCard from '../components/WSCard';
import WSButton from '../components/WSButton';
import { Brain, Zap, TrendingUp, Clock, Target, AlertTriangle, X, Minimize2 } from 'lucide-react';

const IA = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [loadingStep, setLoadingStep] = useState(0);
  const [loadingText, setLoadingText] = useState('');

  // Lista completa de ativos da corretora
  const ativos = [
    'Ethereum (OTC)', 'Bitcoin (OTC)', 'Dogecoin (OTC)', 'XRP (OTC)', 'Apple Inc. (OTC)', 'Amazon.com Inc. (OTC)', 'Tesla Inc. (OTC)', 'Microsoft Corp. (OTC)',
  ];

  const generateAnalysis = () => {
    setIsAnalyzing(true);
    setLoadingStep(0);
    
    // Sequência épica de carregamento de 10 segundos
    const steps = [
      { text: "Conectando aos mercados globais...", duration: 1500 },
      { text: "Analisando 2.847 ativos em tempo real...", duration: 1500 },
      { text: "Processando padrões de candlestick...", duration: 1200 },
      { text: "Calculando probabilidades de entrada...", duration: 1200 },
      { text: "Verificando correlações de mercado...", duration: 1200 },
      { text: "Aplicando algoritmos de machine learning...", duration: 1200 },
      { text: "Certificando oportunidades de alta precisão...", duration: 1200 },
      { text: "Finalizando análise e gerando sinal...", duration: 1200 }
    ];

    let currentStep = 0;
    
    const executeStep = () => {
      if (currentStep < steps.length) {
        setLoadingStep(currentStep);
        setLoadingText(steps[currentStep].text);
        
        setTimeout(() => {
          currentStep++;
          executeStep();
        }, steps[currentStep].duration);
      } else {
        // Gerar análise final
        const now = new Date();
        
        // Gerar horário entre 3-7 minutos no futuro (horário atual de Brasília)
        const minutosAdicionar = Math.floor(Math.random() * 5) + 3; // 3 a 7 minutos
        const horarioSinal = new Date(now.getTime() + (minutosAdicionar * 60 * 1000));
        
        // Gerar horário para plano B (mais 2-4 minutos após o primeiro)
        const minutosPlanoB = Math.floor(Math.random() * 3) + 2; // 2 a 4 minutos após
        const horarioPlanoB = new Date(horarioSinal.getTime() + (minutosPlanoB * 60 * 1000));
        
        // Selecionar ativos aleatórios
        const ativoSinal = ativos[Math.floor(Math.random() * ativos.length)];
        let ativoPlanoB = ativos[Math.floor(Math.random() * ativos.length)];
        
        // Garantir que o plano B seja diferente do sinal principal
        while (ativoPlanoB === ativoSinal) {
          ativoPlanoB = ativos[Math.floor(Math.random() * ativos.length)];
        }
        
        const analysis = {
          ativo: ativoSinal,
          acao: Math.random() > 0.5 ? 'COMPRAR' : 'VENDER',
          horario: horarioSinal.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit',
            timeZone: 'America/Sao_Paulo'
          }),
          planoB: {
            ativo: ativoPlanoB,
            acao: Math.random() > 0.5 ? 'COMPRAR' : 'VENDER',
            horario: horarioPlanoB.toLocaleTimeString('pt-BR', { 
              hour: '2-digit', 
              minute: '2-digit',
              timeZone: 'America/Sao_Paulo'
            })
          }
        };
        
        setAnalysisData(analysis);
        setIsAnalyzing(false);
        setShowAnalysis(true);
        setLoadingStep(0);
      }
    };

    executeStep();
  };

  const closeAnalysis = () => {
    setShowAnalysis(false);
    setIsMinimized(false);
  };

  const minimizeAnalysis = () => {
    setIsMinimized(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-[#D4B429]/10 rounded-xl">
            <Brain className="w-8 h-8 text-[#D4B429]" />
          </div>
          <h1 className="text-3xl font-bold text-white">Análise I.A.</h1>
        </div>
        <p className="text-[#A9B0BC] max-w-2xl mx-auto">
          Nossa inteligência artificial analisa o mercado em tempo real para gerar sinais precisos de trading.
        </p>
      </div>

      {/* Botão Principal de Geração */}
      <div className="flex justify-center">
        <WSButton
          onClick={generateAnalysis}
          disabled={isAnalyzing}
          variant="primary"
          className="px-12 py-4 text-lg font-semibold min-w-[300px] h-16 text-xl relative overflow-hidden group"
        >
          {isAnalyzing ? (
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-6 h-6 border-2 border-[#0B0B0F] border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-6 h-6 border-2 border-transparent border-t-[#0B0B0F] rounded-full animate-ping"></div>
              </div>
              <span className="animate-pulse">Analisando...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6" />
              Gerar Análise I.A.
            </div>
          )}
          {!isAnalyzing && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          )}
        </WSButton>
      </div>

      {/* Experiência de Carregamento Épica */}
      {isAnalyzing && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gradient-to-br from-[#131721] to-[#171B26] rounded-3xl border-2 border-[#C9A227] p-8 max-w-md w-full mx-4 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] rounded-full flex items-center justify-center animate-pulse">
                  <Brain className="w-10 h-10 text-[#0B0B0F]" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C9A227]/30 to-[#43FFAF]/30 rounded-full blur-xl animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">I.A. WallStreet</h3>
              <p className="text-[#A9B0BC]">Processando análise avançada</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-[#A9B0BC] mb-2">
                <span>Progresso</span>
                <span>{Math.round(((loadingStep + 1) / 8) * 100)}%</span>
              </div>
              <div className="w-full bg-[#0B0B0F] rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#C9A227] to-[#43FFAF] rounded-full transition-all duration-500 relative"
                  style={{ width: `${((loadingStep + 1) / 8) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Loading Steps */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 border-2 border-[#C9A227] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#C9A227] rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute -inset-1 border border-[#C9A227]/30 rounded-full animate-ping"></div>
                </div>
                <div>
                  <p className="text-white font-medium animate-pulse">{loadingText}</p>
                  <div className="flex gap-1 mt-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-[#D4B429] rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats em Tempo Real */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-[#0B0B0F]/50 rounded-xl p-3">
                <div className="text-[#43FFAF] font-bold text-lg animate-pulse">
                  {Math.floor(Math.random() * 1000) + 2000}
                </div>
                <div className="text-xs text-[#A9B0BC]">Ativos Analisados</div>
              </div>
              <div className="bg-[#0B0B0F]/50 rounded-xl p-3">
                <div className="text-[#D4B429] font-bold text-lg animate-pulse">
                  {(Math.random() * 10 + 85).toFixed(1)}%
                </div>
                <div className="text-xs text-[#A9B0BC]">Precisão</div>
              </div>
            </div>

            {/* Efeitos Visuais */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#D4B429] rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${Math.random() * 2 + 1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Estatísticas da I.A. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <WSCard className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-[#43FFAF]" />
            <span className="text-sm text-[#A9B0BC]">Taxa de Acerto</span>
          </div>
          <div className="text-2xl font-bold text-[#43FFAF]">87.3%</div>
        </WSCard>
        
        <WSCard className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Target className="w-5 h-5 text-[#C9A227]" />
            <span className="text-sm text-[#A9B0BC]">Sinais Hoje</span>
          </div>
          <div className="text-2xl font-bold text-white">24</div>
        </WSCard>
        
        <WSCard className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-[#6FD3FF]" />
            <span className="text-sm text-[#A9B0BC]">Último Sinal</span>
          </div>
          <div className="text-2xl font-bold text-white">2 min</div>
        </WSCard>
      </div>

      {/* Iframe da Corretora */}
      <WSCard>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-[#43FFAF] rounded-full"></div>
          <h3 className="text-lg font-semibold text-white">Plataforma de Trading</h3>
        </div>
        <div className="bg-[#0B0B0F] rounded-lg overflow-hidden border border-[#1E2430]">
          <iframe
            src="https://asafebroker.com/"
            className="w-full h-[600px] border-0"
            title="Plataforma ASafe Broker"
            allow="fullscreen"
          />
        </div>
        <p className="text-xs text-[#667085] mt-2 text-center">
          Plataforma oficial da corretora para execução das operações
        </p>
      </WSCard>

      {/* Popup de Análise */}
      {showAnalysis && analysisData && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
          isMinimized ? 'pointer-events-none' : 'bg-black/50 backdrop-blur-sm'
        }`}>
          <div className={`bg-[#131721] rounded-2xl border border-[#D4B429] shadow-2xl transition-all duration-300 ${
            isMinimized 
              ? 'fixed bottom-4 right-4 w-80 pointer-events-auto' 
              : 'w-full max-w-md'
          }`}>
            {/* Header do Popup */}
            <div className="flex items-center justify-between p-4 border-b border-[#1E2430]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#43FFAF] rounded-full animate-pulse"></div>
                <h3 className="font-semibold text-white">Sinal Gerado</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={minimizeAnalysis}
                  className="p-1 text-[#A9B0BC] hover:text-white transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={closeAnalysis}
                  className="p-1 text-[#A9B0BC] hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <div className="p-6 space-y-6">
                {/* Sinal Principal */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4B429]/10 rounded-full mb-4">
                    <Zap className="w-4 h-4 text-[#D4B429]" />
                    <span className="text-sm font-medium text-[#D4B429]">SINAL PRINCIPAL</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-[#A9B0BC] mb-1">ATIVO</div>
                      <div className="text-xl font-bold text-white">{analysisData.ativo}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-[#A9B0BC] mb-1">AÇÃO</div>
                      <div className={`text-2xl font-bold ${
                        analysisData.acao === 'COMPRAR' ? 'text-[#43FFAF]' : 'text-[#FF6B6B]'
                      }`}>
                        {analysisData.acao}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-[#A9B0BC] mb-1">HORÁRIO</div>
                      <div className="text-xl font-bold text-[#D4B429]">{analysisData.horario}</div>
                    </div>
                  </div>
                </div>

                {/* Divisor */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#1E2430]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#131721] text-[#667085]">PLANO B/LOSS</span>
                  </div>
                </div>

                {/* Plano B */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B6B]/10 rounded-full mb-4">
                    <AlertTriangle className="w-4 h-4 text-[#FF6B6B]" />
                    <span className="text-sm font-medium text-[#FF6B6B]">PLANO B</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-[#A9B0BC] mb-1">ATIVO</div>
                      <div className="text-lg font-bold text-white">{analysisData.planoB.ativo}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-[#A9B0BC] mb-1">AÇÃO</div>
                      <div className={`text-lg font-bold ${
                        analysisData.planoB.acao === 'COMPRAR' ? 'text-[#43FFAF]' : 'text-[#FF6B6B]'
                      }`}>
                        {analysisData.planoB.acao}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-[#A9B0BC] mb-1">HORÁRIO</div>
                      <div className="text-lg font-bold text-[#C9A227]">{analysisData.planoB.horario}</div>
                    </div>
                  </div>
                </div>

                {/* Botão de Ação */}
                <WSButton 
                  onClick={closeAnalysis}
                  variant="primary" 
                  className="w-full"
                >
                  Executar Operação
                </WSButton>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IA;

