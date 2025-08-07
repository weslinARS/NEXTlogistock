import { auth } from '@/auth';
import { redirect } from 'next/navigation';

interface AdminWrapperProps {
	children?: React.ReactNode;
}

export default async function AdminWrapper({ children }: AdminWrapperProps) {
	const session = await auth();
	const userRole = session?.user?.role?.toLowerCase();
	if (!userRole) redirect('/login');
	if (userRole !== 'admin') {
		redirect('/accessed-denied');
	}
	return <div>{children}</div>;
}
