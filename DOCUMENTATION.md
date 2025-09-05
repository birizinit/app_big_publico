


_# Documentação do Projeto WallStreet_

## 1. Visão Geral do Projeto

O WallStreet é um aplicativo de trading de alta performance, projetado para oferecer uma experiência de usuário luxuosa e funcionalidades avançadas. Com um design dark premium e acentos em dourado metálico, a plataforma foi desenvolvida com foco em "mobile-first", garantindo uma interface responsiva e elegante em qualquer dispositivo.

**Stack Tecnológica:**

*   **Frontend:** React.js
*   **Estilização:** Tailwind CSS
*   **Componentes:** Componentes customizados (WSButton, WSCard, WSInput)
*   **Ícones:** Lucide React




## 2. Design System

O design system do WallStreet foi cuidadosamente elaborado para transmitir uma sensação de luxo, profissionalismo e alta tecnologia. A paleta de cores, tipografia e componentes foram escolhidos para criar uma experiência de usuário coesa e visualmente impressionante.

**Paleta de Cores:**

*   **Fundo Principal:** `#0B0B0F` (quase preto, para um visual dark profundo)
*   **Superfícies:** `#131721` e `#171B26` (tons de cinza escuro para cards e elementos)
*   **Dourado Metálico:** `#C9A227` (cor de destaque principal para botões, links e elementos importantes)
*   **Verde Neon:** `#43FFAF` (para indicar lucros e ações positivas)
*   **Vermelho:** `#FF6B6B` (para indicar perdas e ações negativas)
*   **Texto Principal:** `#FFFFFF` (branco puro para máxima legibilidade)
*   **Texto Secundário:** `#A9B0BC` (cinza claro para informações de suporte)

**Tipografia:**

*   **Fonte Principal:** Inter (uma fonte sans-serif moderna e legível)
*   **Pesos:** Regular, Medium, Semibold, Bold

**Componentes Customizados:**

*   **WSButton:** Botão customizado com variantes `primary` (dourado) e `secondary` (cinza), com efeitos de hover e animações.
*   **WSCard:** Componente de card versátil com variantes `default` e `premium`, com bordas e fundos customizados.
*   **WSInput:** Campo de input estilizado com foco dourado e design consistente.




## 3. Funcionalidades Implementadas

O aplicativo WallStreet conta com um conjunto robusto de funcionalidades, todas implementadas com o mais alto padrão de qualidade e design.

### 3.1. Dashboard Principal

O dashboard é a tela inicial do aplicativo, fornecendo uma visão geral completa da performance do trader.

*   **KPIs em Tempo Real:** Cards com métricas importantes como Lucro Total, Win Rate e Operações.
*   **Formulário de Adição de Operações:** Permite registrar novas operações de forma rápida e intuitiva.
*   **Lista de Operações Recentes:** Exibe as últimas operações realizadas, com detalhes de ativo, resultado e data.

### 3.2. Análise I.A.

A funcionalidade de Análise I.A. é o coração do WallStreet, oferecendo sinais de trading gerados por inteligência artificial.

*   **Botão de Geração Proeminente:** Um botão grande e dourado para gerar novas análises.
*   **Animação de Carregamento Profissional:** Uma animação elegante é exibida enquanto a I.A. processa os dados.
*   **Popup de Análise Responsivo:** Um popup com design premium exibe o sinal principal e o plano B/loss, com informações claras de ativo, ação e horário.
*   **Funcionalidade de Minimizar:** O popup pode ser minimizado para não atrapalhar a navegação.
*   **Iframe da Corretora:** Um placeholder para o iframe da corretora está integrado na página.

### 3.3. Gestão de Banca

A página de Gestão de Banca oferece ferramentas poderosas para o gerenciamento de risco e capital.

*   **Calculadora Avançada:** Permite configurar a banca total, risco por operação, stop loss e take profit.
*   **Estatísticas em Tempo Real:** Todos os cálculos são atualizados instantaneamente, mostrando o tamanho ideal da operação, risco em R$, ratio R:R e metas diárias/mensais.
*   **Regras de Gestão de Risco:** Cards informativos com as principais diretrizes para preservar o capital.
*   **Calculadora Rápida:** Uma seção de destaque com o tamanho recomendado da operação e um botão para aplicar na próxima operação.

### 3.4. Ranking de Traders

A página de Ranking promove a competição saudável e a inspiração entre os usuários.

*   **Top 10 Traders:** Lista os 10 melhores traders da comunidade.
*   **Filtros por Período:** Permite visualizar o ranking diário, semanal, mensal ou anual.
*   **Sistema de Badges:** Badges coloridos e com gradientes indicam o nível de cada trader (Lenda, Mestre, Expert, etc.).
*   **Estatísticas Detalhadas:** Exibe o lucro, retorno, win rate e número de operações de cada trader.




## 4. Estrutura do Projeto

O projeto foi organizado de forma modular e escalável, seguindo as melhores práticas de desenvolvimento React.

```
/wallstreet-app
├── /public
│   └── index.html
├── /src
│   ├── /components
│   │   ├── DesktopSidebar.jsx
│   │   ├── Layout.jsx
│   │   ├── Logo.jsx
│   │   ├── MobileTabBar.jsx
│   │   ├── WSButton.jsx
│   │   ├── WSCard.jsx
│   │   └── WSInput.jsx
│   ├── /pages
│   │   ├── Dashboard.jsx
│   │   ├── GestãoBanca.jsx
│   │   ├── IA.jsx
│   │   └── Ranking.jsx
│   ├── App.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── DOCUMENTATION.md
```

**Principais Diretórios:**

*   `/src/components`: Contém os componentes reutilizáveis da aplicação.
*   `/src/pages`: Contém as páginas principais da aplicação.
*   `/src/App.jsx`: Componente principal que gerencia o roteamento e o layout.
*   `/src/App.css`: Arquivo de estilos globais e customizados.




## 5. Como Rodar o Projeto

Para rodar o projeto em um ambiente de desenvolvimento, siga os passos abaixo:

1.  **Instale as dependências:**

    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

3.  **Acesse a aplicação:**

    Abra o seu navegador e acesse `http://localhost:5173`.
`


