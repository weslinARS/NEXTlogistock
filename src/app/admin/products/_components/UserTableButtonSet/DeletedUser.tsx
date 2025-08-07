'use client';
import { Button } from '@/components/Common/Button';
import { useDaisyModal } from '@/hooks/useDaisyModal';
import { FaTrash } from 'react-icons/fa';

interface Props {
	id: string;
}
export default function DeleteUserButton({ id }: Props) {
	const showModal = useDaisyModal();

	const handleDelete = async () => {
		showModal({
			showCancelButton: true,
			showDenyButton: true,
			icon: 'warning',
			title: 'Eliminar usuario',
			text: '¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.',
			customButtons({ onConfirm, onDeny, onCancel }) {
				return (
					<div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
						<Button color="error" content="Eliminar" onClick={onDeny} />
						<Button color="neutral" content="Desactivar" onClick={onConfirm} />
						<Button
							color="secondary"
							content="Cancelar"
							variant="ghost"
							onClick={onCancel}
						/>
					</div>
				);
			},
		});
	};
	return (
		<Button color="error" onClick={handleDelete}>
			<FaTrash />
			<span className="hidden md:inline">Eliminar</span>
		</Button>
	);
}
