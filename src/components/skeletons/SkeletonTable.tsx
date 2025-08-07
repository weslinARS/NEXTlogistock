export const SkeletonTable = () => {
	return (
		<div className="p-6 shadow-none bg-base-100 rounded-lg sm:shadow-lg">
			<h1 className="text-2xl font-bold mb-4">Cargando Datos...</h1>

			<div className="overflow-x-auto">
				<table className="table w-full">
					<div className="hidden sm:block">
						<thead>
							<tr>
								<th>
									<div className="skeleton h-5 w-5 rounded"></div>
								</th>
								<th>
									<div className="skeleton h-4 w-32 rounded"></div>
								</th>
								<th>
									<div className="skeleton h-4 w-48 rounded"></div>
								</th>
								<th>
									<div className="skeleton h-4 w-24 rounded"></div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>
									<div className="skeleton h-5 w-5 rounded"></div>
								</th>
								<td>
									<div className="skeleton h-4 w-36 rounded"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-56 rounded"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-20 rounded"></div>
								</td>
							</tr>
							<tr>
								<th>
									<div className="skeleton h-5 w-5 rounded"></div>
								</th>
								<td>
									<div className="skeleton h-4 w-28 rounded"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-48 rounded"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-20 rounded"></div>
								</td>
							</tr>
							<tr>
								<th>
									<div className="skeleton h-5 w-5 rounded"></div>
								</th>
								<td>
									<div className="skeleton h-4 w-32 rounded"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-52 rounded"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-20 rounded"></div>
								</td>
							</tr>
							<tr>
								<th>
									<div className="skeleton h-5 w-5 rounded"></div>
								</th>
								<td>
									<div className="skeleton h-4 w-40 rounded"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-60 rounded"></div>
								</td>
								<td>
									<div className="skeleton h-4 w-20 rounded"></div>
								</td>
							</tr>
						</tbody>
					</div>

					<div className="block sm:hidden">
						<div>
							<div className="skeleton w-full h-50 mb-2 rounded"></div>
							<div className="skeleton w-full h-50 mb-2 rounded"></div>
							<div className="skeleton w-full h-50 mb-2 rounded"></div>
							<div className="skeleton w-full h-50 mb-2 rounded"></div>
						</div>
					</div>
				</table>
			</div>
		</div>
	);
};
