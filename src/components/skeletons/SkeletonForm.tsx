export const SkeletonForm = () => {
	return (
		<div className="flex flex-col gap-4 p-4 w-full">
			<div className="skeleton h-8 w-64 self-center"></div>
			<div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col items-start">
						<div className="skeleton h-4 w-52"></div>
						<div className="skeleton h-8 w-72 mt-2"></div>
					</div>
					<div className="flex flex-col items-start">
						<div className="skeleton h-4 w-52"></div>
						<div className="skeleton h-8 w-72 mt-2"></div>
					</div>
					<div className="flex flex-col items-start">
						<div className="skeleton h-4 w-52"></div>
						<div className="skeleton h-8 w-72 mt-2"></div>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="flex flex-col items-start">
						<div className="skeleton h-4 w-52"></div>
						<div className="skeleton h-8 w-72 mt-2"></div>
					</div>
					<div className="flex flex-col items-start">
						<div className="skeleton h-4 w-52"></div>
						<div className="skeleton h-8 w-72 mt-2"></div>
					</div>
					<div className="flex flex-col items-start">
						<div className="skeleton h-4 w-52"></div>
						<div className="skeleton h-8 w-72 mt-2"></div>
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row gap-4 items-center justify-center">
				<div className="skeleton w-72 h-10 md:w-52"></div>
				<div className="skeleton w-72 h-10 md:w-52"></div>
			</div>
		</div>
	);
};
