import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardRedirectPage() {
	const session = await auth();
	const userRole = session?.user.role?.toLocaleLowerCase();

	if (!userRole) redirect('/login');
	switch (userRole) {
		case 'admin':
			redirect('/admin/dashboard');
			break;
		case 'manager':
			redirect('/manager/dashboard');
			break;
		case 'seller':
			redirect('/seller/dashboard');
		default:
			redirect('/accessed-denied');
	}
}
