import React from 'react';

const WSButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C9A227] disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#C9A227] text-[#0B0B0F] hover:bg-[#D4AF37] drop-shadow-[0_0_20px_rgba(201,162,39,0.3)]',
    secondary: 'bg-[#171B26] text-white hover:bg-[#171B26]/80',
    ghost: 'hover:bg-[#171B26] hover:text-white',
    outline: 'border border-[#1E2430] bg-transparent hover:bg-[#171B26] hover:text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-2xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button 
      className={classes} 
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {children}
    </button>
  );
};

export default WSButton;

