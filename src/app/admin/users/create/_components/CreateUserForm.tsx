'use client';

import DynamicForm from '@/components/DynamicForm/DynamicForm';
import {
	FormConfig,
	FormSchema,
} from '@/components/DynamicForm/types/formFieldTypes';
import { CreateUserDto, CreateUserDtoYup } from '@lib/schemas/createUserSchema';
import { IApiResponseBody } from '@lib/utils/ApiResponse';
import { customAlphabet } from 'nanoid';
import { useRouter } from 'next/navigation';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'sonner';

const nanoid = customAlphabet(
	'1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_!@',
	10
);
const userRoleOptions: Array<{ label: string; value: string }> = [
	{ label: 'Administrador', value: 'admin' },
	{ label: 'Manager', value: 'manager' },
	{ label: 'Vendedor', value: 'seller' },
];
const formColumns: FormSchema<CreateUserDto> = [
	{
		inputs: [
			{
				fieldName: 'firstName',
				label: 'Nombre',
				type: 'text',
				placeholder: 'Ingrese el nombre',
				required: true,
			},
			{
				fieldName: 'lastName',
				label: 'Apellido',
				type: 'text',
				placeholder: 'Ingrese el apellido',
				required: true,
			},
			{
				fieldName: 'email',
				label: 'Correo electrónico',
				type: 'email',
				placeholder: 'Ingrese el correo electrónico',
				required: true,
			},
		],
	},
	{
		inputs: [
			{
				fieldName: 'password',
				label: 'Contraseña',
				type: 'text',
				placeholder: 'Ingrese la contraseña',
				required: true,
				readOnly: true,
			},
			{
				fieldName: 'role',
				label: 'Rol',
				type: 'select',
				selectConfig: {
					options: userRoleOptions,
					labelKey: 'label',
					valueKey: 'value',
				},
			},
		],
	},
];

const initialValues: CreateUserDto = {
	email: '',
	firstName: '',
	lastName: '',
	password: nanoid(),
	role: 'seller',
};

const formConfig: FormConfig<CreateUserDto> = {
	cancelButtonText: 'Cancelar',
	submitButtonText: 'Crear usuario',
	showCancelButton: true,
	formSchema: formColumns,
	initialValues: initialValues,
	centerButtons: true,
	formValidator: CreateUserDtoYup,
};
export default function CreateProductForm() {
	const router = useRouter();
	async function handleSubmit(values: CreateUserDto) {
		const request = fetch('/api/users/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...values,
			}),
		});
		toast.promise(
			request.then(async (response) => {
				const result = (await response.json()) as IApiResponseBody<null>;

				if (!response.ok) {
					const messages = Array.isArray(result.error)
						? result.error
						: [result.error];
					throw new Error(messages.join('. '));
				}

				return result;
			}),
			{
				loading: 'Creando usuario...',
				success: (result) => {
					router.refresh();
					return `Usuario creado con éxito`;
				},
				error: (err) => `${err.message || 'Error al crear el usuario'}`,
				position: 'top-center',
			}
		);
	}
	return (
		<div className="mt-4">
			<DynamicForm
				formConfig={formConfig}
				formTitle="Crear nuevo usuario"
				formIcon={<FaPlus />}
				submitHandler={(values) => handleSubmit(values as CreateUserDto)}
				cancelHandler={() => router.back()}
			/>
		</div>
	);
}
