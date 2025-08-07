'use client';
import { SkeletonForm } from '@/components/skeletons/SkeletonForm';

export default function loading() {
	return (
		<div className="flex flex-col items-center justify-center">
			<SkeletonForm />
		</div>
	);
}
