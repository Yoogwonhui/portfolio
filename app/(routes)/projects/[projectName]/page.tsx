export default function Page({ params }: { params: { projectName: string } }) {
	const projectName = params.projectName;

	return (
		<div>
			<div>{projectName}</div>

			<div className="my-10"></div>
		</div>
	);
}
