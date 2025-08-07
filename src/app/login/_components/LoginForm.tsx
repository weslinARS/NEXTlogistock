'use client';
import DynamicForm from '@/components/DynamicForm/DynamicForm';
import {
	FormColumn,
	FormConfig,
} from '@/components/DynamicForm/types/formFieldTypes';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaExclamation } from 'react-icons/fa';
import { toast } from 'sonner';

import * as y from 'yup';
const loginFormSchema = y.object({
	email: y
		.string()
		.email('El correo no es válido')
		.min(1, 'El correo es requerido')
		.trim(),
	password: y
		.string()
		.min(1, 'La contraseña es requerida')
		.trim()
		.required('El formulario es requerido'),
});

type loginFormType = y.InferType<typeof loginFormSchema>;

const formColumn: FormColumn<loginFormType>[] = [
	{
		inputs: [
			{
				label: 'Correo Electronico',
				fieldName: 'email',
				type: 'email',
				required: true,
				placeholder: 'juan@gmail.com',
			},
			{
				label: 'Contraseña',
				fieldName: 'password',
				type: 'password',
				required: true,
				placeholder: '*************',
			},
		],
	},
];

const initialValues: loginFormType = {
	email: '',
	password: '',
};

const formConfig: FormConfig<loginFormType> = {
	cancelButtonText: 'Volver atrás',
	showCancelButton: true,
	formSchema: formColumn,
	formValidator: loginFormSchema,
	initialValues: initialValues,
	submitButtonText: 'Iniciar Sesión',
	centerButtons: true,
};
export default function LoginForm() {
	const router = useRouter();
	async function handleSubmit(data: loginFormType) {
		console.debug('values are', data);
		try {
			const result = await signIn('credentials', {
				redirect: false,
				email: data.email,
				password: data.password,
			});
			console.debug('result is', result);
			if (result?.error) {
				toast('Error Al iniciar Sesion', {
					description:
						'Correo o Contraseña no válido, verifique y vuelva a intentarlo',
					duration: 5000,
					icon: <FaExclamation />,
					id: 'sigin-error',
					position: 'top-center',
				});
			} else if (result?.ok) {
				toast('Bienvenido', {
					duration: 5000,
					id: 'signin-welcome',
					icon: <FaExclamation />,
					position: 'top-center',
				});
				router.push('/dashboard');
			}
		} catch (error) {
			console.debug(error);
		}
	}
	return (
		<>
			<DynamicForm
				formTitle="Iniciar Sesión"
				formConfig={formConfig}
				submitHandler={(values) => handleSubmit(values as loginFormType)}
				buttonOrientation="vertical"
			/>
		</>
	);
}
