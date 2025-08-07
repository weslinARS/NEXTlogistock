import {  tv } from 'tailwind-variants';
import type {VariantProps} from 'tailwind-variants';
import type { ReactNode } from '@tanstack/react-router';

const badgeStyle = tv({
  base: 'badge',
  variants: {
    color: {
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      success: 'badge-success',
      error: 'badge-error',
      warning: 'badge-warning',
      info: 'badge-info',
      neutral: 'badge-neutral',
    },
    size: {
      small: 'badge-sm',
      medium: 'badge-md',
      large: 'badge-lg',
      xlarge: 'badge-xl',
    },
    variant: {
      solid: '',
      outline: 'badge-outline',
      dash: 'badge-dash',
      ghost: 'badge-ghost',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
    variant: 'solid',
  },
});

type BadgeProps = VariantProps<typeof badgeStyle> & {
  children: ReactNode;
};
export function Badge(props: BadgeProps) {
  return (
    <span
      className={badgeStyle({
        color: props.color,
        size: props.size,
        variant: props.variant,
      })}
    >
      {props.children}
    </span>
  );
}
