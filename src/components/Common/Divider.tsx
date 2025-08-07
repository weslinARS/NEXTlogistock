import {  tv } from 'tailwind-variants';
import type {VariantProps} from 'tailwind-variants';

const dividerStyle = tv({
  base: 'divider',
  variants: {
    orientation: {
      horizontal: 'divider-horizontal',
      vertical: 'divider-vertical',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
type DividerProps = VariantProps<typeof dividerStyle>;
export function Divider(props: DividerProps) {
  return (
    <div
      className={dividerStyle({
        orientation: props.orientation,
      })}
    ></div>
  );
}
