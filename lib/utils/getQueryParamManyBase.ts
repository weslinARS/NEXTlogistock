import * as yup from 'yup';

export type IQueryParamManyBase = yup.InferType<
	typeof queryParamManyBaseSchema
>;

export const queryParamManyBaseSchema = yup.object({
	pageIndex: yup
		.number()
		.integer('El índice de página debe ser un número entero.')
		.min(0)
		.default(0),

	pageSize: yup
		.number()
		.integer('El tamaño de página debe ser un número entero.')
		.min(1)
		.max(100, 'El tamaño de página no puede ser mayor a 100.')
		.default(10),

	isSearch: yup.boolean().default(false),
	withDeleted: yup.boolean().default(false),
	allRecords: yup.boolean().default(false),

	include: yup
		.array(yup.string())
		.default([])
		.transform((value, originalValue) => {
			if (typeof originalValue === 'string' && originalValue) {
				return originalValue.split(',');
			}
			return value;
		}),

	count: yup
		.array(yup.string())
		.default([])
		.transform((value, originalValue) => {
			if (typeof originalValue === 'string' && originalValue) {
				return originalValue.split(',');
			}
			return value;
		}),
});

/**
 * Validates and transforms query parameters from a URL.
 * This function is now async and will throw a `ValidationError` if validation fails.
 * @param searchParams The `URLSearchParams` object from the request.
 * @returns A promise that resolves to a validated and typed object of query parameters.
 */
export async function validateQueryParams(
	searchParams: URLSearchParams
): Promise<IQueryParamManyBase> {
	// Convert URLSearchParams to a plain object.
	const queryAsObject = Object.fromEntries(searchParams.entries());

	// Let Yup handle validation, transformation, and defaults all at once.
	// This will throw a `ValidationError` on failure, which should be caught in your route handler.
	const validatedParams = await queryParamManyBaseSchema.validate(
		queryAsObject,
		{
			abortEarly: false,
			stripUnknown: true,
		}
	);

	return validatedParams;
}
