import { withAuth } from '@lib/middlewares/withAuth';
import {
	apiError,
	apiSuccess,
	ERROR_MESSAGES,
	HttpStatus,
} from '@lib/utils/ApiResponse';
import { NextRequest } from 'next/server';
import { userRepository } from '../../_repositories/UserRepository';

async function secureDELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
): Promise<Response> {
	// get id from query params,
	const id = (await params).id;
	try {
		// verify if exists
		const exists = await userRepository.verifyById(id!);
		if (!exists) {
			return apiError({
				errorCode: 'NOT_FOUND',
				message: ERROR_MESSAGES.NOT_FOUND,
				status: HttpStatus.NOT_FOUND,
			});
		}
		const result = await userRepository.delete(id);
		if (result.ok === false) {
			return apiError({
				errorCode: 'INTERNAL_SERVER_ERROR',
				message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
				status: HttpStatus.INTERNAL_SERVER_ERROR,
			});
		}
		return apiSuccess({
			message: 'Usuario eliminado correctamente',
			status: HttpStatus.OK,
		});
	} catch (error) {
		return apiError({
			errorCode: 'INTERNAL_SERVER_ERROR',
			message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
			status: HttpStatus.INTERNAL_SERVER_ERROR,
		});
	}
}

export const DELETE = withAuth(secureDELETE, ['admin', 'manager']);
