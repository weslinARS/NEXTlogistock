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
		<div className="flex flex-col gap-4">
			<Button onClick={goToCreateUser}>
				<FaPlus />
				Usuario
			</Button>
		</div>
	);
}
