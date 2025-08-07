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
export const ERROR_MESSAGES = {
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

export interface IApiResponseBody<T> {
	success: boolean;
	message: string;
	data?: T;
	error?: string | string[] | Record<string, string[]>; // Permite un mensaje o un objeto de errores de validación
	errorCode?: ERROR_CODES;
	pagination?: IPagination;
	meta?: Record<string, any>;
}

export interface IApiError extends IApiResponseBody<null> {}
export interface IApiSuccess<T> extends IApiResponseBody<T> {}

function createApiResponse<T>(
	body: IApiResponseBody<T>,
	status: HttpStatus
): NextResponse<IApiResponseBody<T>> {
	return NextResponse.json(body, { status });
}

export function apiSuccess<T>({
	data,
	message = 'Operación completada con éxito',
	status = HttpStatus.OK,
	pagination,
	meta,
}: {
	data: T;
	message?: string;
	status?: HttpStatus;
	pagination?: IPagination;
	meta?: Record<string, any>;
}) {
	const body: IApiResponseBody<T> = {
		success: true,
		message,
		data,
		pagination,
		meta,
	};
	return createApiResponse(body, status);
}

export function apiError({
	error,
	message = 'Ocurrió un error',
	status = HttpStatus.INTERNAL_SERVER_ERROR,
	errorCode,
}: {
	error: string | string[] | Record<string, string[]>;
	message?: string;
	status?: HttpStatus;
	errorCode?: ERROR_CODES;
}) {
	const body: IApiResponseBody<null> = {
		success: false,
		message,
		error,
		errorCode,
		data: null,
	};
	return createApiResponse(body, status);
}
