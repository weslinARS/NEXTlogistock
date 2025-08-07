import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface Props {
	path: string;
	icon: ReactNode;
	label: string;
	isOpenSideBar: boolean;
	isDrawerLink: boolean;
}

export default function NavLink({
	path,
	icon,
	label,
	isOpenSideBar,
	isDrawerLink = false,
}: Props) {
	const pathName = usePathname();
	const isActive = pathName === path;

	// Clases CSS para la estructura y el tooltip
	const baseClasses = `flex flex-row items-center gap-2 rounded-md px-3 py-1`;
	const tooltipClasses = `tooltip tooltip-right tooltip-primary items-center justify-center`;

	// Clases CSS condicionales
	const conditionalClasses = `${!isOpenSideBar && tooltipClasses} ${
		isActive && isDrawerLink === false
			? 'bg-base-200 text-primary border-primary border'
			: `${
					isDrawerLink === false ? ' hover:border-primary border' : ''
			  } border-transparent duration-100 ease-in-out hover:border`
	}`;

	return (
		<Link
			href={path}
			data-tip={`${label}`}
			className={`${baseClasses} ${conditionalClasses}`}
		>
			<span className={`${isOpenSideBar ? 'text-sm' : 'text-center text-lg'}`}>
				{icon}
			</span>
			{isOpenSideBar && (
				<span
					className={`text-sm font-semibold capitalize ${
						isActive && isDrawerLink ? ' underline' : ''
					}`}
				>
					{label}
				</span>
			)}
		</Link>
	);
}
