import type { ReactNode } from '@tanstack/react-router';
import { TitleComponent } from './TitleComponent';

interface Props {
  name: string;
  icon: ReactNode;
  children: ReactNode;
}
export function Layout({ name, icon, children }: Props) {
  return (
    <>
      <section className="flex flex-col items-start gap-2">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row gap-2">
            <TitleComponent color="primary" type="main">
              {icon && icon}
              {name}
            </TitleComponent>
          </div>
        </div>

        <div className="w-full">{children}</div>
      </section>
    </>
  );
}
