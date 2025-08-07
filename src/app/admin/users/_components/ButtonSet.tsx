'use client';
import { Button } from '@/components/Common/Button';
import { useRouter } from 'next/navigation';
import { FaPlus } from 'react-icons/fa';

export default function ButtonSet() {
	const router = useRouter();
	function goToCreateUser() {
		router.push('/admin/users/create');
	}
	return (
		<div className="flex flex-col gap-4 w-full sm:flex-row">
			<Button onClick={goToCreateUser} className="w-full sm:w-auto">
				<FaPlus />
				Usuario
			</Button>
		</div>
	);
}
