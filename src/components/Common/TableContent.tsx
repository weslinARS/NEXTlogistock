import type { FC } from 'react';

interface TableContentProps {
  content: string;
  className?: string;
}
export const TableContent: FC<TableContentProps> = ({
  className,
  content = '...',
}) => {
  return (
    <span className={`${className}`}>
      {content.length > 10 ? `${content.slice(0, 20)}...` : content}
    </span>
  );
};
