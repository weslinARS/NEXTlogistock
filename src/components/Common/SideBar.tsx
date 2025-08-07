'use client';

import { useSession } from 'next-auth/react';
import { type ReactNode, useMemo, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { uid } from 'react-uid';
import NavLink from './navigation/NavLink';
import { routeLinks } from './navigation/RouteLinksByRole';

interface Props {
	children: ReactNode;
}

export default function SideBar({ children }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const { data: user, status } = useSession();
	const links = useMemo(
		() => routeLinks.find((item) => item.role === user?.user.role)?.links || [],
		[user]
	);
	if (status == 'loading')
		return (
			<div className=" flex flex-col items-center justify-center h-screen w-screen">
				<span>Cargando...</span>
			</div>
		);
	return (
		<div className="grid h-[90vh] w-full grid-cols-1 md:grid-cols-[auto_1fr] gap-4 p-2">
			{/* Sidebar (hidden below md) */}
			<aside
				className={`hidden md:grid relative grid-rows-[auto_1fr] items-start gap-8 py-4 bg-base-100 rounded-lg shadow-md transition-width duration-200 ease-in-out
          ${isOpen ? 'w-48 px-4' : 'w-20 px-2'} border border-base-300`}
			>
				{/* Logo + Toggle */}
				<div className="flex items-center justify-center text-primary font-bold italic">
					{!isOpen ? (
						<span className="text-xl">LS</span>
					) : (
						<span className="text-primary font-semibold">LogiStock</span>
					)}
					<button
						onClick={() => setIsOpen((open) => !open)}
						className="btn btn-xs btn-square btn-primary absolute -right-2 shadow-md shadow-slate-400/100"
					>
						<FaArrowLeft
							className={`${
								!isOpen && 'rotate-180'
							} transition-transform duration-300`}
						/>
					</button>
				</div>

				{/* Navigation */}
				<nav className="flex flex-col gap-2">
					<span className="text-primary text-sm font-bold px-1">Menú</span>
					{links.map((item) => (
						<NavLink
							isDrawerLink={false}
							key={uid(item.path)}
							path={item.path}
							icon={item.icon}
							label={item.label}
							isOpenSideBar={isOpen}
						/>
					))}
				</nav>
			</aside>

			{/* Main content */}
			<main className="overflow-auto rounded-lg p-4">{children}</main>
		</div>
	);
}
