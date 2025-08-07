import NavBar from '@/components/Common/navigation/NavBar';
import SideBar from '@/components/Common/SideBar';
import { ReactNode } from 'react';
import AdminWrapper from './AdminWrapper';

const VALID_ROLES = ['admin'];
interface RoleLayoutProps {
	children: ReactNode;
}
export default async function RoleLayout({ children }: RoleLayoutProps) {
	return (
		<div className="flex flex-col">
			<NavBar />

			<SideBar>
				<AdminWrapper>{children}</AdminWrapper>
			</SideBar>
		</div>
	);
}
