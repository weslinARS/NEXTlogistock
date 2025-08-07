'use client';
import { Button } from '@/components/Common/Button';
import { FaTrash } from 'react-icons/fa';

interface Props {
	id: string;
}
export default function DeleteUserButton({ id }: Props) {
	return (
		<Button color="error">
			<FaTrash />
			<span className="hidden md:inline">Eliminar</span>
		</Button>
	);
}
