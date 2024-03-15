import { introduceData } from '@/app/_lib/data';
import IntroduceCard from '@/app/_components/IntroduceCard';
import TypeAnimationComponent from '@/app/_components/TypeAnimationComponent';

export default function IntroduceMain() {
	return (
		<div className="flex flex-col items-center">
			<TypeAnimationComponent
				sequenceList={[
					'꾸준히 성장하는',
					1000,
					'문제 해결에 열정적인',
					1000,
					'사용자 중심의',
					1000,
					'협업을 중시하는',
					1000,
				]}
				style={{ marginBottom: 30, marginTop: 20 }}
			/>

			{introduceData.introduceList.map((d, index) => (
				<div key={index} className="text-lg ">
					{d}
				</div>
			))}

			<IntroduceCard style={{ marginTop: 40 }} />
		</div>
	);
}
