import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // 🔹 ajuste o caminho conforme sua pasta

import Logo from '../components/Logo';

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });
  const [particles, setParticles] = useState([]);

  // Partículas de fundo
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.2 + 0.1
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev =>
        prev.map(particle => ({
          ...particle,
          y: particle.y <= -5 ? 105 : particle.y - particle.speed * 0.03
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // 🔹 LOGIN
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        alert("Login realizado com sucesso!");
        onLogin?.();
      } else {
        // 🔹 CADASTRO
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert("Cadastro realizado com sucesso!");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#1A1A1A] relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Partículas */}
      <div className="absolute inset-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#D4B429] rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4B429]/5 to-transparent"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mb-6">
            <Logo size="lg" />
          </div>
          <h1 className="text-3xl font-bold text-[#D4B429] mb-2">
            Wall Street Academy
          </h1>
          <p className="text-[#A0A0A0] text-base">
            Acesse sua conta
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#1A1A1A]/90 to-[#0F0F0F]/90 backdrop-blur-xl rounded-2xl border border-[#333333] p-8 shadow-2xl">
          {/* Tabs Login/Cadastro */}
          <div className="flex mb-8 bg-[#0A0A0A] rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                isLogin
                  ? 'bg-[#D4B429] text-black'
                  : 'text-[#A0A0A0] hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                !isLogin
                  ? 'bg-[#D4B429] text-black'
                  : 'text-[#A0A0A0] hover:text-white'
              }`}
            >
              Cadastro
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome (Cadastro) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#D4B429] flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full bg-[#0A0A0A]/60 border border-[#333333] focus:border-[#D4B429] rounded-lg px-4 py-3.5 text-white placeholder:text-[#666666]"
                  placeholder="Seu nome completo"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#D4B429] flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full bg-[#0A0A0A]/60 border border-[#333333] focus:border-[#D4B429] rounded-lg px-4 py-3.5 text-white placeholder:text-[#666666]"
                placeholder="seu@email.com"
                required
              />
            </div>

            {/* Telefone (Cadastro) */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#D4B429] flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Telefone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full bg-[#0A0A0A]/60 border border-[#333333] focus:border-[#D4B429] rounded-lg px-4 py-3.5 text-white placeholder:text-[#666666]"
                  placeholder="(11) 99999-9999"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Senha */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#D4B429] flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full bg-[#0A0A0A]/60 border border-[#333333] focus:border-[#D4B429] rounded-lg px-4 py-3.5 pr-12 text-white placeholder:text-[#666666]"
                  placeholder="Sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#666666] hover:text-[#D4B429]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Esqueci senha */}
            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-sm text-[#D4B429] hover:text-[#E6C547] font-medium">
                  Esqueceu a senha?
                </button>
              </div>
            )}

            {/* Botão Submit */}
            <button
              type="submit"
              className="w-full bg-[#D4B429] hover:bg-[#E6C547] text-black font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isLogin ? 'Entrar' : 'Criar Conta'}
            </button>

            {/* Alternar */}
            <div className="text-center pt-4">
              <span className="text-[#A0A0A0] text-sm">
                {isLogin ? 'Não tem uma conta?' : 'Já possui conta?'}
              </span>
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-[#D4B429] hover:text-[#E6C547] font-semibold text-sm"
              >
                {isLogin ? 'Cadastre-se' : 'Fazer Login'}
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-8 space-y-1">
          <p className="text-[#A0A0A0] text-sm">Plataforma de trading profissional</p>
          <p className="text-[#666666] text-xs">Seguro & Confiável</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
