import React from 'react';
import { cva } from 'class-variance-authority';

const baseStyles =
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border h-9 px-4 py-2 overflow-hidden';

const textColorStyles = {
  brand: 'text-brand hover:text-brand-700',
  success: 'text-success hover:text-success-700'
  // ... other text color variants
};

const bgColorStyles = {
  brand: 'bg-brand hover:bg-brand-600',
  success: 'bg-success hover:bg-success-600'
  // ... other background color variants
};

const styleVariants = {
  default: '',
  outline: 'border-2 bg-transparent',
  ghost: 'bg-transparent'
  // ... other style types
};

const compoundVariants = [
  // Apply text and background colors for 'default' style
  ...Object.entries(textColorStyles).map(([key, textClass]) => ({
    variant: key,
    style: 'default',
    class: textClass
  })),
  ...Object.entries(bgColorStyles).map(([key, bgClass]) => ({
    variant: key,
    style: 'default',
    class: bgClass
  })),
  // For 'outline' style, apply only text color
  ...Object.entries(textColorStyles).map(([key, textClass]) => ({
    variant: key,
    style: 'outline',
    class: textClass
  }))
  // ...other compound variants as needed
];

const buttonCVA = cva(baseStyles, {
  variants: {
    variant: { ...textColorStyles, ...bgColorStyles },
    style: styleVariants
    // ... other variants like size
  },
  compoundVariants,
  defaultVariants: {
    variant: 'default',
    style: 'default'
    // ... other defaults
  }
});

/**
 * Button component supporting various features like loading state, icons, and different sizes.
 * Utilizes Tailwind CSS for styling.
 * @param {Object} props - Props for Button component.
 */
const Button = ({
  children,
  onClick,
  variant = 'default',
  style = 'default',
  className,
  disabled = false,
  loading = { isLoading: false, icon: null, text: null }
  // ... other props
}) => {
  const buttonClasses = buttonCVA({ variant, style, className });

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled || loading.isLoading}>
      {loading.isLoading ? (
        <div className="flex flex-row items-center justify-center align-middle">
          {loading.icon}
          {loading.text}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
