import { auth } from '@/auth';
import { apiError, ERROR_MESSAGES, HttpStatus } from '@lib/utils/ApiResponse';
import { NextRequest } from 'next/server';

type Handler = (req: NextRequest, context?: any) => Promise<Response>;

export function withAuth(handler: Handler, roles: string[] = []) {
	return async (req: NextRequest, context?: any) => {
		const session = await auth();
		if (!session || !session.user) {
			return apiError({
				errorCode: 'UNAUTHORIZED',
				status: HttpStatus.UNAUTHORIZED,
				error: ERROR_MESSAGES.UNAUTHORIZED,
			});
		}
		if (roles.length && !roles.includes(session.user.role)) {
			console.debug('User role not authorized:', session.user.role);
			return apiError({
				errorCode: 'FORBIDDEN',
				status: HttpStatus.FORBIDDEN,
				error: ERROR_MESSAGES.FORBIDDEN,
				message: `Usuario no autorizado para esta acción. Rol requerido: ${roles.join(
					', '
				)}`,
			});
		}

		return handler(req, context);
	};
}
