'use client';
import DeleteUserButton from './DeletedUser';
import RestoreUserButton from './RestoreUserButton';
import UpdateUserButton from './UpdateUser';

interface Props {
	id: string;
	isDeleted: boolean;
}
export default function UserTableButtonSet({ id, isDeleted }: Props) {
	return (
		<div className="flex flex-col md:flex-row gap-4 items-start justify-start w-full">
			{isDeleted ? (
				<>
					<RestoreUserButton id={id} />
				</>
			) : (
				<>
					<UpdateUserButton id={id} />
					<DeleteUserButton id={id} />
				</>
			)}
		</div>
	);
}
