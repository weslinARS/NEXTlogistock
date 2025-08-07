import {  tv } from 'tailwind-variants';
import type {VariantProps} from 'tailwind-variants';

const progressStyle = tv({
  base: 'progress w-full',
  variants: {
    color: {
      primary: 'progress-primary',
      secondary: 'progress-secondary',
      success: 'progress-success',
      error: 'progress-error',
      warning: 'progress-warning',
      info: 'progress-info',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

type ProgressBarProps = VariantProps<typeof progressStyle> & {
  value: number;
  valueMax: number;
};
export default function ProgressBar(props: ProgressBarProps) {
  return (
    <progress
      className={progressStyle({
        color: props.color,
      })}
      value={props.value}
      max={props.valueMax}
    ></progress>
  );
}
