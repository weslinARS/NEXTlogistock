'use client';

import adminUsersQueryOptions from '@/app/_queryOptions/adminUsersQueryOptions';
import { usePagination } from '@/hooks/usePagination';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import UserTableIndex from '../products/_components/UserTableIndex';
import ButtonSet from './_components/ButtonSet';

export default function UserAdminPage() {
	const paginationControl = usePagination({
		pageIndex: 0,
		pageSize: 2,
		totalRecords: 0,
		totalPages: 0,
		withDeleted: false,
	});
	const {
		data: { data: responseBody },
		error,
		isLoading,
		isError,
	} = useSuspenseQuery(
		adminUsersQueryOptions.findManyUsersQueryOptions({
			withDeleted: paginationControl.withDeleted,
			page: paginationControl.pagination.pageIndex,
			pageSize: paginationControl.pagination.pageSize,
		})
	);
	useEffect(() => {
		if (responseBody.pagination) {
			paginationControl.setTotalRecords(responseBody.pagination.totalRecords);
		}
	}, [responseBody.pagination]);

	return (
		<div className="flex flex-col gap-4">
			<ButtonSet />
			<div>
				<UserTableIndex
					data={responseBody.data || []}
					paginationControl={paginationControl}
				/>
			</div>
		</div>
	);
}
