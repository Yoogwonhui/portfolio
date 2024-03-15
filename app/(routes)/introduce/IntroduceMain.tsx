import { introduceData } from '@/app/_lib/data';
import IntroduceCard from '@/app/_components/IntroduceCard';

export default function IntroduceMain() {
	return (
		<div className="flex flex-col items-center">
			{introduceData.introduceList.map((d, index) => (
				<div key={index} className="text-lg ">
					{d}
				</div>
			))}

			<IntroduceCard style={{ marginTop: 40 }} />
		</div>
	);
}
