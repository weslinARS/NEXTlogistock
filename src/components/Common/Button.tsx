import type { ReactNode } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const buttonStyle = tv({
  base: 'btn',
  variants: {
    color: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      error: 'btn-error',
      warning: 'btn-warning',
      success: 'btn-success',
      info: 'btn-info',
      neutral: 'btn-neutral',
    },
    size: {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
    },
    widthVariant: {
      block: 'btn-block',
      wide: 'btn-wide',
      none: '',
    },
    variant: {
      none: '',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
      link: 'btn-link',
    },
    isDisabled: {
      true: 'btn-disabled',
      false: '',
    },
    shape: {
      none: '',
      circle: 'btn-circle',
      square: 'btn-square',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    variant: 'none',
    isDisabled: false,
    widthVariant: 'none',
  },
});

type ButtonProps = VariantProps<typeof buttonStyle> & {
  content?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  showContent?: boolean;
  className?: string;
  children?: ReactNode;
};
export function Button({
  icon = null,
  content,
  color,
  size,
  variant,
  widthVariant,
  isDisabled,
  buttonType = 'button',
  isLoading = false,
  onClick,
  showContent = true,
  className,
  children,
}: ButtonProps) {
  return (
    <div>
      <button
        className={
          buttonStyle({
            color,
            size,
            variant,
            isDisabled,
            widthVariant,
          }) +
          ' ' +
          className
        }
        type={buttonType}
        onClick={onClick}
      >
        {children && children}
        {isLoading && !children && (
          <span className="loading loading-spinner"></span>
        )}
        {!isLoading && !children && icon}
        {showContent && !children && content}
      </button>
    </div>
  );
}
