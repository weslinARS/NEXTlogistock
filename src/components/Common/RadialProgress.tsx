import {  tv } from 'tailwind-variants';
import type {VariantProps} from 'tailwind-variants';

const RadialStyle = tv({
  base: 'radial-progress',
  variants: {
    color: {
      primary: 'text-primary-content border-primary',
      secondary: 'text-secondary-content border-secondary',
      success: 'text-success-content border-success',
      error: 'text-error-content border-error',
      warning: 'text-warning-content border-warning',
      info: 'text-info-content border-info',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

type RadialProgressProps = VariantProps<typeof RadialStyle> & {
  value: number;
};
export function RadialProgress({ value, color }: RadialProgressProps) {
  return (
    <>
      <div
        className="radial-progress bg-primary text-primary-content border-primary border-4"
        style={{ '--value': value } /* as React.CSSProperties */}
        aria-valuenow={value}
        role="progressbar"
      >
        {value}%
      </div>
    </>
  );
}
