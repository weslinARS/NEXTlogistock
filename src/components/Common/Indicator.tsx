import {  tv } from 'tailwind-variants';
import type {VariantProps} from 'tailwind-variants';
import type { ReactNode } from '@tanstack/react-router';

const indicatorStyle = tv({
  base: 'indicator-item badge',
  variants: {
    color: {
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      success: 'badge-success',
      error: 'badge-error',
      warning: 'badge-warning',
      info: 'badge-info',
    },
  },
});

type indicatorProps = VariantProps<typeof indicatorStyle> & {
  children: ReactNode;
  indicatorContent?: string;
};
export function Indicator(prop: indicatorProps) {
  return (
    <div className="indicator">
      <span
        className={indicatorStyle({
          color: prop.color,
        })}
      >
        {prop.indicatorContent}
      </span>
      {prop.children}
    </div>
  );
}
