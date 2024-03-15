/* eslint-disable @next/next/no-img-element */
import Card from '@mui/material/Card';
import { CSSProperties } from 'react';
import Link from 'next/link';

export default function ProjectCard({
	style,
	href = '',
	src = '',
	title = '',
}: {
	style?: CSSProperties;
	href: string;
	src: string;
	title: string;
}) {
	return (
		<Link href={href} className="no-underline">
			<div className="text-black font-semibold truncate">{title}</div>
			<Card
				className="relative flex flex-col shadow-lg hover:shadow-2xl shadow-slate-400 w-full h-40 md:h-52 overflow-hidden"
				style={style}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
						overflow: 'hidden', // 추가
					}}
				>
					<img
						src={src}
						style={{
							width: '100%',
							height: 'auto',
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
						alt=""
					/>
				</div>
			</Card>
		</Link>
	);
}
