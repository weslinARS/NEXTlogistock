'use client';

import { ErrorCard } from '@/components/Common/ErrorCard';
import { isAxiosError } from 'axios';

interface Props {
	error: any;
	reset: () => void;
}
export default function error({ error, reset }: Props) {
	let displayMessage = 'Ocurrió un error inesperado.';

	if (isAxiosError(error) && error.response?.data?.message) {
		displayMessage = error.response.data.message;
	} else if (error instanceof Error) {
		displayMessage = error.message;
	}
	return (
		<div>
			<ErrorCard errorMessage={displayMessage} />
		</div>
	);
}
