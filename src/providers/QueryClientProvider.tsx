'use client';
import { getQueryClient } from '@/app/get-query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
export const CustomQueryClientProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const queryClient = getQueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
