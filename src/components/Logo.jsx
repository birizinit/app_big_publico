import React from 'react';

const Logo = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/logo-wallstreet.png" 
        alt="WallStreet Academy" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;

