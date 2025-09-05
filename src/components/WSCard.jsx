import React from 'react';

const WSCard = ({ 
  children, 
  variant = 'default', 
  className = '', 
  ...props 
}) => {
  const variants = {
    default: 'bg-[#131721] border border-[#1E2430] rounded-2xl p-6 transition-all duration-200 hover:border-[#C9A227]/20',
    premium: 'bg-gradient-to-br from-[#131721] to-[#131721]/80 border border-[#1E2430] rounded-2xl p-6 transition-all duration-200 hover:border-[#C9A227]/20 drop-shadow-[0_0_20px_rgba(201,162,39,0.3)]',
    glass: 'backdrop-blur-md bg-[#131721]/80 border border-white/10 rounded-2xl p-6'
  };
  
  const classes = `${variants[variant]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const WSCardHeader = ({ children, className = '' }) => (
  <div className={`flex flex-col space-y-1.5 pb-4 ${className}`}>
    {children}
  </div>
);

const WSCardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold leading-none tracking-tight text-white ${className}`}>
    {children}
  </h3>
);

const WSCardDescription = ({ children, className = '' }) => (
  <p className={`text-sm text-[#A9B0BC] ${className}`}>
    {children}
  </p>
);

const WSCardContent = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

const WSCardFooter = ({ children, className = '' }) => (
  <div className={`flex items-center pt-4 ${className}`}>
    {children}
  </div>
);

WSCard.Header = WSCardHeader;
WSCard.Title = WSCardTitle;
WSCard.Description = WSCardDescription;
WSCard.Content = WSCardContent;
WSCard.Footer = WSCardFooter;

export default WSCard;

