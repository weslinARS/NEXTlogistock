'use client';

import { AsyncTable } from '@/components/Common/Table/AsyncTable';
import { PaginationControl } from '@/hooks/usePagination';
import { User } from '@prisma-generated/prisma';
import { createColumnHelper } from '@tanstack/react-table';
import UserTableButtonSet from './UserTableButtonSet/Index';

interface UserTableIndexProps {
	data: User[];
	paginationControl: PaginationControl;
}

const columnHelper = createColumnHelper<User>();

const columns = [
	columnHelper.accessor('firstName', {
		header: 'Nombre',
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor('lastName', {
		header: 'Apellido',
		cell: (info) => info.getValue(),
	}),

	columnHelper.accessor('email', {
		header: 'Email',
		cell: (info) => info.getValue(),
	}),

	columnHelper.accessor('role', {
		header: 'Rol',
		cell: (info) => info.getValue(),
	}),

	columnHelper.display({
		header: 'Acciones',
		id: 'buttons',
		cell: ({ row }) => (
			<UserTableButtonSet
				id={row.original.id}
				isDeleted={row.original.isDeleted}
			/>
		),
	}),
];
export default function UserTableIndex({
	data,
	paginationControl,
}: UserTableIndexProps) {
	return (
		<AsyncTable<User>
			columns={columns}
			data={data}
			decrementPageIndex={paginationControl.decrementPageIndex}
			incrementPageIndex={paginationControl.incrementPageIndex}
			pagination={{
				pageIndex: paginationControl.pagination.pageIndex,
				pageSize: paginationControl.pagination.pageSize,
				totalPages: paginationControl.totalPages,
				totalRecords: paginationControl.totalRecords,
			}}
			setPagination={paginationControl.setPagination}
		/>
	);
}
