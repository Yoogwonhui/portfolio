import Card from '@mui/material/Card';
import Image from 'next/image';
import { introduceData } from '../_lib/data';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { CSSProperties } from 'react';

export default function IntroduceCard({ style }: { style: CSSProperties }) {
	return (
		<Card
			className="flex flex-col p-4 md:p-8 shadow-lg hover:shadow-2xl shadow-slate-400"
			style={style}
		>
			<div className="text-center pb-4 text-xl font-semibold">ABOUT</div>
			<div className="flex flex-col md:flex-row">
				<Image
					alt="profile"
					src={'/images/profile.jpg'}
					width={250}
					height={333}
					priority
				/>
				<div className="md:p-4 md:ml-4 mt-4 md:mt-0">
					<RowComponent
						icon={<AccountCircleIcon />}
						label={introduceData.name}
					/>
					<RowComponent
						icon={<CakeIcon />}
						label={introduceData.birthday}
					/>
					<RowComponent
						icon={<HomeIcon />}
						label={introduceData.residence}
					/>
					<RowComponent
						icon={<PhoneIphoneIcon />}
						label={introduceData.phone}
					/>
					<RowComponent
						icon={<EmailIcon />}
						label={introduceData.email}
					/>
					<RowComponent
						icon={<SchoolIcon />}
						label={introduceData.university}
					/>
				</div>
			</div>
		</Card>
	);
}

const RowComponent = ({ icon, label }: { icon: any; label: string }) => {
	return (
		<div className="flex gap-4 pb-2 md:pb-3">
			{icon}
			<div>{label}</div>
		</div>
	);
};
