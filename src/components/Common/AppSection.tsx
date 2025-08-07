'use client';
import { usePathname, useRouter } from 'next/navigation';
import type React from 'react';
import type { FC } from 'react';
import { Button } from './Button';
import TitleComponent from './TitleComponent';

interface Props {
	title: string;
	icon: React.ReactElement;
	children: React.ReactNode;
}
const basePathRegex = /^\/[a-zA-Z0-9]+$/;
export const AppSection: FC<Props> = ({ children, title, icon }) => {
	const location = usePathname();
	const navigate = useRouter();
	const isBasePath = basePathRegex.test(location);
	return (
		<>
			<section className="flex flex-col gap-y-2 py-3 px-1">
				<article className="flex flex-col items-start sm:flex-row  gap-3 sm:items-center ">
					<TitleComponent size="medium" color="primary">
						{icon} {title}
					</TitleComponent>
					<Button
						isDisabled={isBasePath}
						onClick={() => navigate.back()}
						content="<< volver"
					></Button>
				</article>
				<article className="flex flex-col gap-y-2">{children}</article>
			</section>
		</>
	);
};
