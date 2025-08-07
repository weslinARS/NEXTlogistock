'use client';

import { Button } from '@/components/Common/Button';
import { FaTrashRestore } from 'react-icons/fa';

interface Props {
	id: string;
}

export default function RestoreUserButton({ id }: Props) {
	return (
		<Button color="info">
			<FaTrashRestore /> <span className="hidden md:inline">Restaurar</span>{' '}
		</Button>
	);
}
