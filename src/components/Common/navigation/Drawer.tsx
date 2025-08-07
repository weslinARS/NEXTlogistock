'use client';

import { useMemo } from 'react';
import { FaBars } from 'react-icons/fa';

import { useSession } from 'next-auth/react';
import NavLink from './NavLink';
import { routeLinks } from './RouteLinksByRole';

export default function Drawer() {
	const { data, status } = useSession();
	const links = useMemo(
		() => routeLinks.find((item) => item.role === data?.user.role)?.links || [],
		[data?.user]
	);
	return (
		<div className="dropdown md:hidden">
			<div tabIndex={0} role="button" className="btn btn-outline btn-primary">
				<FaBars />
			</div>
			<ul
				tabIndex={0}
				className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
			>
				{JSON.stringify(data) === '{}'}
				{links.map((route) => (
					<li key={route.path}>
						<NavLink
							isDrawerLink={true}
							icon={route.icon}
							label={route.label}
							path={route.path}
							isOpenSideBar
						></NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}
