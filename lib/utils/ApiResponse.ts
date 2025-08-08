import { NextResponse } from 'next/server';

export enum HttpStatus {
	OK = 200,
	CREATED = 201,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	CONFLICT = 409,
	INTERNAL_SERVER_ERROR = 500,
}

export type ERROR_CODES =
	| 'VALIDATION_ERROR'
	| 'UNAUTHORIZED'
	| 'FORBIDDEN'
	| 'NOT_FOUND'
	| 'INTERNAL_SERVER_ERROR'
	| 'RECORD_ALREADY_EXISTS'
	| 'QUERY_ERROR';

export const ERROR_MESSAGES: Record<ERROR_CODES, string> = {
	VALIDATION_ERROR: 'Ocurrió un error de validación',
	UNAUTHORIZED: 'No está autorizado para realizar esta acción',
	FORBIDDEN: 'Acceso prohibido',
	NOT_FOUND: 'Recurso no encontrado',
	INTERNAL_SERVER_ERROR: 'Ocurrió un error interno en el servidor',
	RECORD_ALREADY_EXISTS: 'El registro ya existe',
	QUERY_ERROR: 'Ocurrió un error al procesar su solicitud',
};

export interface IPagination {
	pageIndex: number;
	pageSize: number;
	totalRecords: number;
	totalPages: number;
}

export interface IApiResponseBody<T = any> {
	success: boolean;
	message: string;
	data?: T | null;
	error?: string | string[] | Record<string, string[]>;
	errorCode?: ERROR_CODES;
	pagination?: IPagination;
	meta?: Record<string, any>;
}

function clean<T extends Record<string, any>>(obj: T) {
	return Object.fromEntries(
		Object.entries(obj).filter(([, v]) => v !== undefined)
	) as Partial<T>;
}

function createApiResponse<T>(
	body: IApiResponseBody<T> | null,
	status: HttpStatus,
	headers?: Record<string, string>
): NextResponse {
	if (status === HttpStatus.NO_CONTENT) {
		// 204 no debe tener body
		return new NextResponse(null, { status, headers });
	}
	return NextResponse.json(body, { status, headers });
}

/* apiSuccess con headers opcionales */
export function apiSuccess<T>({
	data,
	message = 'Operación completada con éxito',
	status = HttpStatus.OK,
	pagination,
	meta,
	headers,
}: {
	data?: T;
	message?: string;
	status?: HttpStatus;
	pagination?: IPagination;
	meta?: Record<string, any>;
	headers?: Record<string, string>;
}) {
	// si es 204 ignoramos data
	const body: IApiResponseBody<T> = clean({
		success: true,
		message,
		data: status === HttpStatus.NO_CONTENT ? undefined : data ?? null,
		pagination,
		meta,
	}) as IApiResponseBody<T>;

	return createApiResponse(body, status, headers);
}

export function apiError({
	error,
	message,
	status = HttpStatus.INTERNAL_SERVER_ERROR,
	errorCode,
	headers,
}: {
	error?: Error | string | string[] | Record<string, string[]>;
	message?: string;
	status?: HttpStatus;
	errorCode?: ERROR_CODES;
	headers?: Record<string, string>;
}) {
	const resolvedMessage =
		message ?? (errorCode ? ERROR_MESSAGES[errorCode] : 'Ocurrió un error');

	let errPayload: string | string[] | Record<string, string[]> | undefined =
		undefined;
	if (!error) {
		errPayload = undefined;
	} else if (typeof error === 'string' || Array.isArray(error)) {
		errPayload = error;
	} else if (error instanceof Error) {
		errPayload = error.message;
	} else {
		errPayload = error as Record<string, string[]>;
	}

	const body: IApiResponseBody<null> = clean({
		success: false,
		message: resolvedMessage,
		error: errPayload,
		errorCode,
		data: null,
	}) as IApiResponseBody<null>;

	return createApiResponse(body, status, headers);
}
