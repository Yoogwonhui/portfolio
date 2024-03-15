'use client';

import { TypeAnimation } from 'react-type-animation';

export default function TypeAnimationComponent({
	sequenceList,
	style,
}: {
	sequenceList: (string | number)[];
	style?: React.CSSProperties;
}) {
	return (
		<div className="flex text-base sm:text-2xl md:text-4xl">
			<TypeAnimation
				sequence={sequenceList}
				wrapper="span"
				speed={10}
				style={{
					display: 'inline-block',
					fontWeight: 'bold',
					...style,
				}}
				repeat={Infinity}
			/>
			<div
				style={{
					display: 'inline-block',
					fontWeight: 'bold',
					...style,
				}}
			>
				프론트엔드 개발자
			</div>
		</div>
	);
}
