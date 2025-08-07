import { auth } from '@/auth';
import NavBar from '@/components/Common/navigation/NavBar';
import SideBar from '@/components/Common/SideBar';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const VALID_ROLES = ['admin'];
interface RoleLayoutProps {
	children: ReactNode;
}
export default async function RoleLayout({ children }: RoleLayoutProps) {
	const session = await auth();

	const userRole = session?.user.role?.toLowerCase();

	if (!userRole) redirect('/login');

	if (!VALID_ROLES.includes(userRole)) redirect('/accessed-denied');

	return (
		<div className="flex flex-col">
			<NavBar />

			<SideBar>{children}</SideBar>
		</div>
	);
}
