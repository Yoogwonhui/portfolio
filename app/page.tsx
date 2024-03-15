import IntroduceMain from './(routes)/introduce/IntroduceMain';
import SkillList from './(routes)/skills/SkillList';

export default function Page() {
	return (
		<div className="flex flex-col items-center">
			<IntroduceMain />
			<div className="p-4 md:p-20 mt-10 md:mt-0">
				<SkillList />
			</div>
		</div>
	);
}
