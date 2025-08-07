'use client';
import { Button } from '@/components/Common/Button';
import { FaPen } from 'react-icons/fa';

interface Props {
	id: string;
}
export default function UpdateUserButton({ id }: Props) {
	return (
		<Button widthVariant="wide">
			<FaPen />
			<span className="hidden md:inline">Editar</span>
		</Button>
	);
}
