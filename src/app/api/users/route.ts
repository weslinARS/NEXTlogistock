import { auth } from '@/auth';

import { validateQueryParams } from '@lib/utils/getQueryParamManyBase';
import bcrypt from 'bcryptjs';
import { ValidationError } from 'yup';
import { $Enums, Prisma } from '../../../../generated/prisma';
import prisma from '../../../../lib/prisma';
import { CreateUserDtoYup } from '../../../../lib/schemas/createUserSchema';
import {
	apiError,
	apiSuccess,
	ERROR_MESSAGES,
	HttpStatus,
} from '../../../../lib/utils/ApiResponse';
import { userRepository } from '../_repositories/UserRepository';

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const queryParams = await validateQueryParams(searchParams);
		console.debug('Query params:', queryParams);
		const includeArgs: Prisma.UserInclude | undefined =
			queryParams.include.length > 0 || queryParams.count.length > 0
				? {
						ProductPriceHistory: queryParams.include.includes(
							'ProductPriceHistory'
						),
						PurchaseOrder: queryParams.include.includes('PurchaseOrder'),
						StockMovement: queryParams.include.includes('StockMovement'),

						...(queryParams.count.length > 0
							? {
									_count: {
										select: {
											ProductPriceHistory: queryParams.count.includes(
												'ProductPriceHistory'
											),
											PurchaseOrder:
												queryParams.count.includes('PurchaseOrder'),
											StockMovement:
												queryParams.count.includes('StockMovement'),
										},
									},
							  }
							: {}),
				  }
				: undefined;

		const result = await userRepository.findMany({
			include: includeArgs,
			select: undefined,
			allRecords: queryParams.allRecords,
			isSearchMode: queryParams.isSearch,
			pageIndex: queryParams.pageIndex,
			take: queryParams.pageSize,
			includeDeleted: queryParams.withDeleted,
			orderBy: {
				lastName: 'asc',
			},
		});

		console.debug('Result from userRepository:', result);
		return apiSuccess({
			data: result.items,
			pagination: {
				pageIndex: queryParams.pageIndex,
				pageSize: queryParams.pageSize,
				totalRecords: result.count,
				totalPages: queryParams.pageSize > 0
					? Math.floor(
						result.count / queryParams.pageSize +
							(result.count % queryParams.pageSize > 0 ? 1 : 0)
					)
					: 0,
			},
		});
	} catch (error) {
		console.debug('Error validating query params:', error);
	}
}

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
