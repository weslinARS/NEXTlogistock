import {  tv } from 'tailwind-variants';
import type {VariantProps} from 'tailwind-variants';

const statusStyle = tv({
  base: 'status',
  variants: {
    size: {
      xSmall: 'status-xs',
      small: 'status-sm',
      medium: 'status-md',
      large: 'status-lg',
      xlarge: 'status-xl',
    },
    color: {
      primary: 'status-primary',
      secondary: 'status-secondary',
      success: 'status-success',
      error: 'status-error',
      warning: 'status-warning',
      info: 'status-info',
      neutral: 'status-neutral',
      accent: 'status-accent',
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'neutral',
  },
});
const contentStyle = tv({
  base: 'content',
  variants: {
    contentSize: {
      xSmall: 'text-xs',
      small: 'text-sm',
      medium: 'text-md',
      large: 'text-lg',
      xlarge: 'text-xl',
    },
    contentColor: {
      primary: 'text	-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      error: 'text-error',
      warning: 'text-warning',
      info: 'text-info',
      neutral: 'text-neutral',
    },
  },
  defaultVariants: {
    contentSize: 'medium',
    contentColor: 'neutral',
  },
});
type StatusProps = VariantProps<typeof statusStyle> &
  VariantProps<typeof contentStyle> & {
    content?: string;
  };

export function Status(props: StatusProps) {
  return (
    <div className="inline-flex items-center justify-center gap-2">
      <div className="inline-grid *:[grid-area:1/1]">
        <div
          className={`${statusStyle({
            color: props.color,
            size: props.size,
          })} animate-ping`}
        ></div>
        <div
          className={statusStyle({
            color: props.color,
            size: props.size,
          })}
        ></div>
      </div>
      {props.content && (
        <span
          className={contentStyle({
            contentColor: props.contentColor,
            contentSize: props.contentSize,
          })}
        >
          {props.content}
        </span>
      )}
    </div>
  );
}
