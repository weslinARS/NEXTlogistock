'use client';
import LoginForm from './_components/LoginForm';

export default function LoginPage() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 h-screen w-screen">
			<div className="card min-w-[300] shadow border">
				<LoginForm />
			</div>
		</div>
	);
}
