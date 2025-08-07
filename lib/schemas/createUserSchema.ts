import * as y from 'yup';
import { $Enums } from '../../generated/prisma';

const validRoles = Object.values($Enums.UserRole);
export const CreateUserDtoYup = y.object({
	role: y.string().oneOf(validRoles, 'El rol es inválido'),
	email: y
		.string()
		.email('El correo electrónico no es válido')
		.required('El correo electrónico es requerido')
		.trim(),
	firstName: y
		.string()
		.min(1, 'El nombre es requerido')
		.max(50, 'El nombre debe tener máximo 50 caracteres')
		.required('El nombre es requerido')
		.trim(),
	lastName: y
		.string()
		.min(1, 'El apellido es requerido')
		.max(50, 'El apellido debe tener máximo 50 caracteres')
		.required('El apellido es requerido')
		.trim(),
	password: y
		.string()
		.min(8, 'La contraseña debe tener al menos 8 caracteres')
		.required('La contraseña es requerida')
		.trim(),
});

// infer type of yup schema
export type CreateUserDto = y.InferType<typeof CreateUserDtoYup>;
