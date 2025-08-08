'use client';
import { keyFactory } from '@/app/_queryOptions/adminUsersQueryOptions';
import { Button } from '@/components/Common/Button';
import { useDaisyModal } from '@/hooks/useDaisyModal';
import { useUser } from '@/hooks/useUser';
import { IApiResponseBody } from '@lib/utils/ApiResponse';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'sonner';

interface Props {
	id: string;
}
export default function DeleteUserButton({ id }: Props) {
	const router = useRouter();
	const { deleteUserMutation } = useUser();
	const showModal = useDaisyModal();
	const queryClient = useQueryClient();
	const handleDelete = async () => {
		const result = await showModal({
			showCancelButton: true,
			showDenyButton: true,
			icon: 'warning',
			title: 'Eliminar usuario',
			text: '¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.',
			customButtons({ onConfirm, onDeny, onCancel }) {
				return (
					<div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
						<Button
							color="neutral"
							content="Desactivar"
							onClick={onConfirm}
							className="w-full md:w-fit"
						/>
						<Button
							color="error"
							content="Eliminar"
							onClick={onDeny}
							className="w-full md:w-fit"
						/>
						<Button
							color="secondary"
							content="Cancelar"
							variant="ghost"
							onClick={onCancel}
							className="w-full md:w-fit"
						/>
					</div>
				);
			},
		});
		if (result === 'confirm') {
			try {
			} catch (error) {
				console.error('Error al eliminar el usuario:', error);
			}
		} else if (result === 'deny') {
			try {
				toast.loading('Eliminando usuario...', {
					id: 'delete-user',
					position: 'top-center',
				});
				const result = (await deleteUserMutation.mutateAsync(
					id
				)) as unknown as IApiResponseBody<null>;
				toast.dismiss('delete-user');
				if (result.success) {
					toast.success('Usuario eliminado con éxito', {
						id: 'delete-user-success',
						duration: 5000,
						position: 'top-center',
					});
					queryClient.invalidateQueries({
						queryKey: [...keyFactory.invalidateManyPaginated],
					});
					router.refresh();
				}
			} catch (error: unknown) {
				toast.dismiss('delete-user');
				const e = error as IApiResponseBody<null>;
				console.debug('Error al eliminar el usuario:', error);
				toast.error('Error al eliminar el usuario: ', {
					description: e.message,
					id: 'delete-user-error',
					duration: 5000,
					position: 'top-center',
				});
			}
		}
	};
	return (
		<Button color="error" onClick={handleDelete}>
			<FaTrash />
			<span className="hidden md:inline">Eliminar</span>
		</Button>
	);
}
