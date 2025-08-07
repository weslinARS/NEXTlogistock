import type {ReactNode} from 'react';
import type { COLOR } from '@/enums/style';

export function Card({
  children,
  color,
  className,
}: {
  children: ReactNode;
  color?: COLOR;
  className?: string;
}) {
  return (
    <div className="w-fit">
      <div
        className={`card ${color && 'bg-' + color} ${className && className} `}
      >
        <div className="card-body items-center">{children}</div>
      </div>
    </div>
  );
}
