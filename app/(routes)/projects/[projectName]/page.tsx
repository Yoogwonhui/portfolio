import { projectData } from '@/app/_lib/data';
import Link from 'next/link';

export default function Page({ params }: { params: { projectName: string } }) {
	const projectName = params.projectName;
	const projectInfo = projectData[projectName];
	const skills = projectInfo.skills;
	const details = projectInfo.details;
	const works = projectInfo.works;
	const participants = projectInfo.participants;
	const period = projectInfo.period;
	const scope = projectInfo.scope;
	const url = projectInfo.url;

	return (
		<div>
			<div className="text-2xl font-semibold">{projectInfo.name}</div>
			<div>{period}</div>

			{skills && (
				<>
					<div className="font-bold text-lg mt-6">사용 기술</div>
					{Object.entries(skills).map(([key, value], index) => (
						<div key={index} className="flex gap-2">
							<div className="font-semibold">{key}</div>
							{(value as string[]).map((skill, idx) => (
								<div key={idx}>{skill}</div>
							))}
						</div>
					))}
				</>
			)}

			{details && (
				<>
					<div className="font-bold text-lg mt-6">프로젝트 내용</div>
					{details.map((detail: string[], index: number) => (
						<div key={index}>{`- ${detail}`}</div>
					))}
				</>
			)}

			{scope && (
				<>
					<div className="font-bold text-lg mt-6">담당 개발 범위</div>
					<div>{scope}</div>
				</>
			)}

			{works && (
				<>
					<div className="font-bold text-lg mt-6">개발 내용</div>
					{works.map((work: string[], index: number) => (
						<div key={index}>{`- ${work}`}</div>
					))}
				</>
			)}

			{participants && (
				<>
					<div className="font-bold text-lg mt-6">참여 인원</div>
					{Object.entries(participants).map(([key, value], index) => (
						<div key={index} className="flex gap-2">
							<div>{key}</div>
							<div>{`${value}명`}</div>
						</div>
					))}
				</>
			)}

			{url && (
				<>
					<div className="font-bold text-lg mt-6">URL</div>
					<Link href={url} target="_blank" className="no-underline">
						{url}
					</Link>
				</>
			)}
		</div>
	);
}
