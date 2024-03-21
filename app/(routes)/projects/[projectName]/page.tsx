/* eslint-disable @next/next/no-img-element */

import { projectData } from '@/app/_lib/data';
import Link from 'next/link';
import Chip from '@mui/material/Chip';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ModalComponent from '@/app/_components/ModalComponent';

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
	const imgCount = projectInfo.imgCount;

	return (
		<div className="flex flex-col xl:flex-row">
			<div className="flex-1">
				<div className="text-xl md:text-2xl font-semibold">
					{projectInfo.name}
				</div>
				<div>{period}</div>

				{skills && (
					<>
						<div className="font-bold text-lg mt-6">사용 기술</div>
						{Object.entries(skills).map(([key, value], index) => (
							<div
								key={index}
								className="flex flex-wrap gap-1 items-center mt-1"
							>
								<div className="font-semibold">{key}</div>
								{(value as string[]).map((skill, idx) => (
									<Chip
										key={idx}
										label={skill}
										variant="outlined"
									/>
								))}
							</div>
						))}
					</>
				)}

				{details && (
					<>
						<div className="font-bold text-lg mt-6">
							프로젝트 내용
						</div>
						{details.map((detail: string[], index: number) => (
							<div key={index}>{`- ${detail}`}</div>
						))}
					</>
				)}

				{scope && (
					<>
						<div className="font-bold text-lg mt-6">
							담당 개발 범위
						</div>
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
						{Object.entries(participants).map(
							([key, value], index) => (
								<div key={index} className="flex gap-2">
									<div>{key}</div>
									<div>{`${value}명`}</div>
								</div>
							)
						)}
					</>
				)}

				{url && (
					<>
						<div className="font-bold text-lg mt-6">URL</div>
						<Link
							href={url}
							target="_blank"
							className="no-underline"
						>
							{url}
						</Link>
					</>
				)}
			</div>

			<div className="flex-1">
				<ImageList
					sx={{ width: '100%', height: '77vh' }}
					cols={projectInfo.imgRatio === 'vertical' ? 2 : 1}
				>
					{[...new Array(imgCount)].map((_, index) => (
						<ImageListItem
							key={index}
							className="border border-solid border-gray-200 rounded"
						>
							<ModalComponent
								isVertical={projectInfo.imgRatio === 'vertical'}
								buttonChildren={
									<img
										src={`/images/projects/${projectName}/${
											index + 1
										}.png`}
										alt=""
										loading="lazy"
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								}
							>
								<img
									src={`/images/projects/${projectName}/${
										index + 1
									}.png`}
									alt=""
									loading="lazy"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</ModalComponent>
						</ImageListItem>
					))}
				</ImageList>
			</div>
		</div>
	);
}
