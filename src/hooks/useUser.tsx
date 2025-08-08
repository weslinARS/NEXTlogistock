'use client';

import axiosInstance from '@/utils/axiosInstance';
import { HttpStatus, IApiResponseBody } from '@lib/utils/ApiResponse';
import { useMutation } from '@tanstack/react-query';

export function useUser() {
	const deleteUserMutation = useMutation({
		mutationKey: ['deleteUser'],
		mutationFn: async (id: string) => {
			return axiosInstance.delete<IApiResponseBody<null>>(`/users/${id}`);
		},
		onSuccess: (data): IApiResponseBody<null> | undefined => {
			if (data.status === HttpStatus.OK) {
				console.log('User deleted successfully:', data.data);
				return data.data as IApiResponseBody<null>;
			}
		},
		onError: (error) => {
			throw error;
		},
	});
	return {
		deleteUserMutation,
	};
}
