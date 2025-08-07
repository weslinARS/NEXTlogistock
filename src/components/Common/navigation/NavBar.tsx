'use client';
import { useSession } from 'next-auth/react';

import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FaSignOutAlt } from 'react-icons/fa';
import { Button } from '../Button';
import Drawer from './Drawer';
export default function NavBar() {
	const { data: user } = useSession();
	const handleLogOut = () => {
		signOut();
		return redirect('/login');
	};

	return (
		<>
			<div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm">
				<div className="flex-none">
					<Drawer />
				</div>
				<div className="flex-1">
					<span className="text-primary mx-2 text-xl font-black italic">
						LogiStock
					</span>
				</div>
				<div className="inline-flex items-center gap-2">
					<span className="hidden sm:block text-neutral text-sm font-medium capitalize">
						{user?.user.name}
					</span>
					<Button
						buttonType="button"
						content="Salir"
						icon={<FaSignOutAlt />}
						color="error"
						onClick={handleLogOut}
						size="sm"
					/>
				</div>
			</div>
		</>
	);
}
