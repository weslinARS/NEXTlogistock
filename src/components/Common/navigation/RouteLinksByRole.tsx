import {
	FaBox,
	FaCartPlus,
	FaHome,
	FaTag,
	FaTruck,
	FaUser,
	FaUserAlt,
} from 'react-icons/fa';
import { $Enums } from '../../../../generated/prisma';

export type RouteLink = {
	label: string;
	icon: React.ReactNode;
	path: string;
};

export type RoleLink = {
	role: $Enums.UserRole;
	links: RouteLink[];
};
export const routeLinks: RoleLink[] = [
	{
		role: 'admin',
		links: [
			{
				label: 'Dashboard',
				icon: <FaHome />,
				path: '/admin/dashboard',
			},
			{
				label: 'Usuarios',
				icon: <FaUser />,
				path: '/admin/users',
			},
			{
				label: 'Productos',
				icon: <FaTag />,
				path: '/admin/products',
			},
			{
				label: 'Proveedores',
				icon: <FaUserAlt />,
				path: '/admin/suppliers',
			},
			{
				label: 'Órdenes',
				icon: <FaCartPlus />,
				path: '/admin/purchase-orders',
			},
			{
				label: 'Almacenes',
				icon: <FaBox />,
				path: '/admin/warehouses',
			},
			{
				label: 'Movimientos',
				icon: <FaTruck />,
				path: '/admin/stock-movements',
			},
		],
	},
];
