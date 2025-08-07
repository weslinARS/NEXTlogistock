import prisma from '@lib/prisma';
import {
	CommonArgs,
	PrismaMutationResponse,
	QueryManyWithCount,
} from '@lib/utils/ApiTypes';
import { Prisma, User } from '../../../../generated/prisma';

export type UserFindOneArgs = {
	where?: Prisma.UserWhereInput;
	select?: Prisma.UserSelect;
	include?: Prisma.UserInclude;
};
export type UserFindManyArgs = UserFindOneArgs &
	CommonArgs & {
		orderBy?: Prisma.UserOrderByWithRelationInput;
	};

interface IUserRepository {
	create(data: Prisma.UserCreateInput): Promise<User>;
	softDelete(id: string): Promise<PrismaMutationResponse>;
	delete(id: string): Promise<PrismaMutationResponse>;
	restore(id: string): Promise<PrismaMutationResponse>;
	update(
		id: string,
		data: Prisma.UserUpdateInput
	): Promise<PrismaMutationResponse>;
	verifyById(id: string): Promise<boolean>;
	verifyByEmail(email: string): Promise<boolean>;
	findByEmail(email: string): Promise<User | null>;
	findById(id: string): Promise<User | null>;
	findMany(args: UserFindManyArgs): Promise<QueryManyWithCount<User>>;
}

class UserRepository implements IUserRepository {
	async create(data: Prisma.UserCreateInput): Promise<User> {
		return prisma.user.create({
			data: data,
		});
	}

	async softDelete(id: string): Promise<PrismaMutationResponse> {
		const record = await prisma.user.updateMany({
			where: {
				id: id,
				isDeleted: false,
			},
			data: {
				isDeleted: true,
			},
		});

		if (record.count > 0) {
			return {
				ok: true,
				recordId: id,
			};
		}

		return {
			ok: false,
			recordId: id,
		};
	}

	async delete(id: string): Promise<PrismaMutationResponse> {
		const result = await prisma.user.deleteMany({
			where: {
				id: id,
			},
		});
		if (result.count > 0) {
			return {
				ok: true,
				recordId: id,
			};
		}

		return {
			ok: false,
			data: null,
			recordId: id,
		};
	}

	async restore(id: string): Promise<PrismaMutationResponse> {
		const result = await prisma.user.updateMany({
			where: {
				id: id,
				isDeleted: true,
			},
			data: {
				isDeleted: false,
			},
		});

		if (result.count > 0) {
			return {
				ok: true,
				recordId: id,
			};
		}
		return {
			ok: false,
			recordId: id,
		};
	}

	async update(
		id: string,
		data: Prisma.UserUpdateInput
	): Promise<PrismaMutationResponse> {
		const result = await prisma.user.updateMany({
			where: {
				id: id,
				isDeleted: false,
			},
			data: data,
		});

		if (result.count > 0) {
			return {
				ok: true,
				recordId: id,
			};
		}

		return {
			ok: false,
			recordId: id,
		};
	}

	async verifyById(id: string): Promise<boolean> {
		const record = await prisma.user.findFirst({
			where: {
				id: id,
				isDeleted: false,
			},
		});
		return !!record;
	}

	async verifyByEmail(email: string): Promise<boolean> {
		const record = await prisma.user.findFirst({
			where: {
				email: email,
				isDeleted: false,
			},
		});

		return !!record;
	}

	async findByEmail(email: string): Promise<User | null> {
		return prisma.user.findUnique({
			where: {
				email: email,
				isDeleted: false,
			},
		});
	}

	async findById(id: string): Promise<User | null> {
		return prisma.user.findUnique({
			where: {
				id: id,
				isDeleted: false,
			},
		});
	}

	async findMany(args: UserFindManyArgs): Promise<QueryManyWithCount<User>> {
		const {
			allRecords,
			includeDeleted,
			isSearchMode,
			pageIndex,
			take,
			where,
			include,
			orderBy,
			select,
		} = args;

		const baseWhere: Prisma.UserWhereInput = includeDeleted
			? where
				? where
				: {}
			: {
					AND: [{ isDeleted: false }, ...(where ? [where] : [])],
			  };

		const paginationArgs =
			take != undefined && pageIndex != undefined && allRecords == false
				? {
						skip: take * pageIndex,
						take: take,
				  }
				: {};

		const findManyArgs: Prisma.UserFindManyArgs = {
			...(include && !select && !isSearchMode
				? {
						include: include,
				  }
				: {}),
			select: isSearchMode
				? {
						firstName: true,
						lastName: true,
						id: true,
				  }
				: select && !include
				? select
				: undefined,
			where: baseWhere,
			omit: {
				password: true,
			},
			...paginationArgs,
		};

		const [records, count] = await Promise.all([
			prisma.user.findMany(findManyArgs),
			prisma.user.count({
				where: baseWhere,
			}),
		]);

		return {
			items: records,
			count: count,
		};
	}
}

export const userRepository = new UserRepository();
