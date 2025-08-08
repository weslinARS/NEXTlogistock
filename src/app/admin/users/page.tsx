'use client';

import adminUsersQueryOptions from '@/app/_queryOptions/adminUsersQueryOptions';
import { usePagination } from '@/hooks/usePagination';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { IApiResponseBody } from '@lib/utils/ApiResponse';
import { User } from '@prisma-generated/prisma';
import ButtonSet from './_components/ButtonSet';
import UserTableIndex from './_components/UserTableIndex';

export default function UserAdminPage() {
	const paginationControl = usePagination({
		pageIndex: 0,
		pageSize: 20,
		totalRecords: 0,
		totalPages: 0,
		withDeleted: false,
	});
	const { data, error, isLoading, isError } = useSuspenseQuery(
		adminUsersQueryOptions.findManyUsersQueryOptions({
			withDeleted: paginationControl.withDeleted,
			page: paginationControl.pagination.pageIndex,
			pageSize: paginationControl.pagination.pageSize,
		})
	);
	const responseBody = data as unknown as IApiResponseBody<User[]>;
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
					data={responseBody?.data || []}
					paginationControl={paginationControl}
				/>
			</div>
		</div>
	);
}
