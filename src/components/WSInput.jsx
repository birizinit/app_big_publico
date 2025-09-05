import React, { forwardRef } from 'react';

const WSInput = forwardRef(({ 
  type = 'text',
  className = '',
  label,
  error,
  icon: Icon,
  ...props 
}, ref) => {
  const inputClasses = `ws-input ${Icon ? 'pl-12' : ''} ${error ? 'border-destructive focus:ring-destructive' : ''} ${className}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        )}
        <input
          type={type}
          className={inputClasses}
          ref={ref}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
});

WSInput.displayName = 'WSInput';

export default WSInput;

