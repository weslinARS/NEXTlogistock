export type CommonArgs = {
	includeDeleted: boolean;
	isSearchMode: boolean;
	pageIndex: number;
	allRecords: boolean;
	take: number;
};

export type QueryManyWithCount<T extends object> = {
	items: T[];
	count: number;
};
export type PrismaMutationResponse = {
	ok: boolean;
	data?: any;
	recordId?: string;
};
