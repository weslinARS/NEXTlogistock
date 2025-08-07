import axiosInstance from '@/utils/axiosInstance';
import { IApiResponseBody } from '@lib/utils/ApiResponse';
import { queryOptions } from '@tanstack/react-query';
import { User } from '../../../generated/prisma';
import { FindManyArgsQueryOptions } from './types';

const defaultKey = 'users-from-admin';

const keyFactory = {
	findManyPaginated: ({
		count,
		include,
		page,
		pageSize,
		withDeleted,
	}: FindManyArgsQueryOptions) =>
		[
			defaultKey,
			'findManyPaginated',
			{ count, include, page, pageSize, withDeleted },
		] as const,
};

const findManyUsersQueryOptions = ({
	count,
	include,
	page,
	pageSize,
	withDeleted,
}: FindManyArgsQueryOptions) => {
	console.debug('findManyUsersQueryOptions called with:', {
		count,
		include,
		page,
		pageSize,
		withDeleted,
	});
	return queryOptions({
		queryKey: [
			...keyFactory.findManyPaginated({
				count,
				include,
				page,
				pageSize,
				withDeleted,
			}),
		],
		queryFn: () =>
			axiosInstance.get<IApiResponseBody<User[]>>('users/', {
				params: {
					...(include && include.length > 0 && { include: include }),
					...(count && count.length > 0 && { count: count }),
					pageIndex: page,
					pageSize: pageSize || 10,
					withDeleted: withDeleted || false,
				},
			}),
	});
};

const adminUsersQueryOptions = {
	findManyUsersQueryOptions,
};

export default adminUsersQueryOptions;
