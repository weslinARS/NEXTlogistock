import { IPagination } from '@lib/utils/ApiResponse';
import { useEffect, useMemo, useState } from 'react';

export type PaginationStateInternal = {
	pageIndex: number;
	pageSize: number;
};
export function usePagination(
	options: IPagination & {
		withDeleted?: boolean;
	}
) {
	const [pagination, setPagination] = useState<PaginationStateInternal>({
		pageIndex: options.pageIndex || 0,
		pageSize: options.pageSize || 10,
	});

	const [withDeleted, setWithDeleted] = useState(options.withDeleted || false);

	const [totalRecords, setTotalRecords] = useState(options.totalRecords || 0);

	const totalPages = useMemo(() => {
		if (totalRecords === 0 || pagination.pageSize === 0) return 0;
		return Math.ceil(totalRecords / pagination.pageSize);
	}, [totalRecords, pagination.pageSize]);

	function setPage(page: number) {
		if (page < 0) page = 0;
		if (page > totalPages - 1) page = totalPages - 1;
		setPagination((prev) => ({ ...prev, pageIndex: page }));
	}

	function setPageSizeFn(size: number) {
		setPagination({
			pageIndex: 0,
			pageSize: size,
		});
	}

	function incrementPageIndex() {
		setPage(pagination.pageIndex + 1);
	}

	function decrementPageIndex() {
		setPage(pagination.pageIndex - 1);
	}
	useEffect(() => {
		console.debug('Total records updated:', totalRecords);
	}, [totalRecords]);
	return {
		// properties
		pagination,
		totalRecords,
		totalPages,
		withDeleted,
		// methods,
		setWithDeleted,
		setPagination,
		setPage,
		setPageSizeFn,
		setTotalRecords,
		incrementPageIndex,
		decrementPageIndex,
	};
}

export type PaginationControl = ReturnType<typeof usePagination>;
