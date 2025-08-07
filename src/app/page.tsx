'use client';
import { Button } from '@/components/Common/Button';
import TitleComponent from '@/components/Common/TitleComponent';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaBookOpen, FaSignInAlt } from 'react-icons/fa';

export default function Home() {
	const { data: session, status } = useSession();
	const router = useRouter();
	const goToLogin = () => {
		router.push('/login');
	};
	useEffect(() => {
		if (status === 'authenticated') {
			router.push('/dashboard');
		}
	}, [status, router]);

	if (status === 'loading')
		return (
			<div className="flex flex-col h-screen w-screen items-center justify-center">
				<span>Cargando...</span>
			</div>
		);
	return (
		<div className="flex flex-col h-screen w-screen items-center justify-center ">
			<div className="flex flex-col items-start gap-4">
				<TitleComponent color="primary" size="main">
					<FaBookOpen />
					LogiStock
				</TitleComponent>

				<p>Gestion de Inventario para Pequeñas y Medianas Empresas</p>

				<div className="flex flex-row gap-4 items-center">
					<Button onClick={() => goToLogin()}>
						<FaSignInAlt />
						Iniciar Sesion
					</Button>
				</div>
			</div>
		</div>
	);
}
