import { SkeletonTable } from '@/components/skeletons/SkeletonTable';

export default function loading() {
	return (
		<>
			<div className="flex flex-col sm:flex-row gap-4 mb-4 mt-4">
				<div className="w-40 h-10 skeleton rounded "></div>
				<div className="w-40 h-10 skeleton rounded "></div>
				<div className="w-40 h-10 skeleton rounded "></div>
			</div>
			<SkeletonTable />
		</>
	);
}
