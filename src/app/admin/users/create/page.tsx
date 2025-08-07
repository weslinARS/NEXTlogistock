'use client';

import CreateUserForm from './_components/CreateUserForm';

export default function AdminCreateUserPage() {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<CreateUserForm />
		</div>
	);
}
