import IntroduceMain from './(routes)/introduce/IntroduceMain';
import SkillList from './(routes)/skills/SkillList';
import { projectData } from './_lib/data';
import ProjectCard from './_components/ProjectCard';

export default function Page() {
	return (
		<div className="flex flex-col items-center">
			<IntroduceMain />
			<div className="p-4 md:p-20 mt-10 md:mt-0">
				<SkillList />
			</div>

			<h2>Projects</h2>

			<div className="flex w-full flex-wrap  md:p-10 box-border">
				{Object.entries(projectData).map(([key, value]: any, index) => (
					<div
						key={index}
						className="w-1/2 md:w-1/3 lg:w-1/4 p-4 hover:p-2 box-border"
						style={{ transition: '0.3s all' }}
					>
						<ProjectCard
							href={`/projects/${key}`}
							src={`images/projects/${key}/1.png`}
							title={value.name}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
