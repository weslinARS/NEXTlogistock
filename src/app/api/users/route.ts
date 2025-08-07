import { auth } from '@/auth';
import bcrypt from 'bcryptjs';
import { ValidationError } from 'yup';
import { $Enums } from '../../../../generated/prisma';
import prisma from '../../../../lib/prisma';
import { CreateUserDtoYup } from '../../../../lib/schemas/createUserSchema';
import {
	apiError,
	apiSuccess,
	ERROR_MESSAGES,
	HttpStatus,
} from '../../../../lib/utils/ApiResponse';

export async function POST(request: Request) {
	// get session
	const session = await auth();
	if (session?.user.role !== $Enums.UserRole.admin) {
		return apiError({
			errorCode: 'UNAUTHORIZED',
			status: HttpStatus.UNAUTHORIZED,
			error: ERROR_MESSAGES.UNAUTHORIZED,
		});
	}
	try {
		// validate body
		const body = await request.json();
		console.debug('Request body:', body);
		const validatedData = await CreateUserDtoYup.validate(body, {
			abortEarly: true,
			stripUnknown: true,
		});

		// verify if the user already exists
		const record = await prisma.user.findUnique({
			where: {
				email: validatedData.email,
			},
			select: {
				id: true,
			},
		});
		if (record) {
			return apiError({
				errorCode: 'RECORD_ALREADY_EXISTS',
				status: HttpStatus.BAD_REQUEST,
				error: 'El usuario ya existe en el sistema',
			});
		}
		// hash password
		const hashedPassword = await bcrypt.hash(
			validatedData.password,
			await bcrypt.genSalt(10)
		);
		await prisma.user.create({
			data: {
				firstName: validatedData.firstName,
				lastName: validatedData.lastName,
				email: validatedData.email,
				role: validatedData.role,
				password: hashedPassword,
			},
		});
		return apiSuccess({
			data: null,
			message: 'Usuario creado exitosamente',
			status: HttpStatus.CREATED,
		});
	} catch (error) {
		if (error instanceof ValidationError) {
			const messages: string[] = error.errors;

			return apiError({
				message: ERROR_MESSAGES.VALIDATION_ERROR,
				error: messages,
				status: HttpStatus.BAD_REQUEST,
			});
		}
		console.error('Error creating user:', error);
		return apiError({
			errorCode: 'INTERNAL_SERVER_ERROR',
			status: HttpStatus.INTERNAL_SERVER_ERROR,
			error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
		});
	}
}
