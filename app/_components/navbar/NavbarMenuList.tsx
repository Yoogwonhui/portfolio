'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import clsx from 'clsx';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BusinessIcon from '@mui/icons-material/Business';
import LaptopIcon from '@mui/icons-material/Laptop';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';

const styles = {
	icon: {
		fontSize: 20,
	},
};

export default function NavbarMenuList() {
	const pathname = usePathname(); // 현재 경로를 알 수 있다.

	const dashboardMenuList = [
		{
			title: 'About Me',
			icon: <AccountBoxIcon style={styles.icon} />,
			href: '/aboutMe',
			type: 'menu',
			subList: [],
		},
		{
			title: 'Technical Skills',
			icon: <LaptopIcon style={styles.icon} />,
			href: '/skills',
			type: 'menu',
			subList: [],
		},
		{
			title: 'Projects',
			icon: <RocketLaunchIcon style={styles.icon} />,
			href: '/projects',
			subList: [
				{
					title: '(인터마인즈) 무인매장 관리자 웹',
					href: '/projects/interminds_storepop',
				},
				{
					title: '(인터마인즈) 무인매장 결제 PWA',
					href: '/projects/interminds_pwa',
				},
				{
					title: '(인터마인즈) 도어팝 관리자 웹',
					href: '/projects/interminds_admin',
				},
				{
					title: '(인터마인즈) CS 관리 웹',
					href: '/projects/interminds_cs',
				},
				{
					title: '(오더) 사장님 웹',
					href: '/projects/psdl_web',
				},
				{
					title: '(오더) 태블릿 앱',
					href: '/projects/psdl_tablet',
				},
				{
					title: '(오더) 더치페이 앱',
					href: '/projects/psdl_app',
				},
				{
					title: '(비햅틱스) 통합로그인 페이지',
					href: '/projects/bhaptics_login',
				},
				{
					title: '(비햅틱스) 플레이어 앱',
					href: '/projects/bhaptics_app',
				},
				{
					title: '(세컨그라운드) 물품 관리 페이지',
					href: '/projects/secondGround',
				},
				{
					title: '(개인) 동물상 테스트 웹',
					href: '/projects/animal',
				},
				{
					title: '(개인) 포트폴리오',
					href: '/projects/portfolio',
				},
			],
			type: 'list',
		},
		{
			title: 'Work Experience',
			icon: <BusinessIcon style={styles.icon} />,
			href: '/experience',
			type: 'menu',
			subList: [],
		},
		{
			title: 'blog',
			icon: <WebIcon style={styles.icon} />,
			href: 'https://tomakesure.tistory.com/',
			type: 'menu',
			subList: [],
		},
		{
			title: 'github',
			icon: <GitHubIcon style={styles.icon} />,
			href: 'https://github.com/Yoogwonhui',
			type: 'menu',
			subList: [],
		},
	];

	return (
		<div
			className="flex flex-col overflow-auto p-6"
			style={{ height: 'calc(100vh - 80px)' }}
		>
			{dashboardMenuList.map((menu, index) => (
				<div key={index}>
					{menu.type === 'menu' ? (
						<>
							<Link
								href={menu.href}
								style={{ fontSize: 17 }}
								className={clsx(
									'flex items-center gap-3 no-underline py-3 font-medium hover:text-blue-500 hover:font-semibold bg-white',
									{
										'text-black':
											'/' + pathname.split('/')[1] !==
											menu.href,
										'text-[#1b60ff]':
											'/' + pathname.split('/')[1] ===
											menu.href,
										'font-semibold':
											'/' + pathname.split('/')[1] ===
											menu.href,
									}
								)}
							>
								<div style={{ width: 16, textAlign: 'center' }}>
									-
								</div>
								{menu.icon}
								<span className="pb-[2px]">{menu.title}</span>
							</Link>
						</>
					) : (
						<MenuList menu={menu} />
					)}
				</div>
			))}
			<div className="flex flex-grow bg-white" />
		</div>
	);
}

const MenuList = ({ menu }: any) => {
	const pathname = usePathname();

	const [isShow, setIsShow] = useState(
		menu.href === '/' + pathname.split('/')[1]
	);

	return (
		<>
			<div
				onClick={() => setIsShow((prev) => !prev)}
				style={{ fontSize: 17 }}
				className={clsx(
					'flex items-center gap-3 no-underline py-3 font-medium cursor-pointer hover:text-blue-500 hover:font-semibold',
					{
						'text-black':
							'/' + pathname.split('/')[1] !== menu.href,
						'text-[#1b60ff]':
							'/' + pathname.split('/')[1] === menu.href,
						'font-semibold':
							'/' + pathname.split('/')[1] === menu.href,
					}
				)}
			>
				<ExpandMoreIcon
					style={{
						fontSize: 16,
						transition: 'all 0.3s',
						transform: isShow ? 'rotate(180deg)' : 'rotate(0deg)',
					}}
				/>
				{menu.icon}
				<span className="pb-[2px]">{menu.title}</span>
			</div>

			<div
				style={{
					height: isShow ? 36 * menu.subList.length : 0,
					transition: 'all 0.3s',
				}}
			>
				{menu?.subList.map((sub: any, idx: number) => (
					<Link
						key={idx}
						href={sub.href}
						style={{
							fontSize: 14,
						}}
						className={clsx(
							'flex items-center gap-3 no-underline py-2 ml-7 font-medium hover:text-blue-500 hover:font-semibold',
							{
								'text-black': pathname !== sub.href,
								'text-[#1b60ff]': pathname === sub.href,
								'font-semibold': pathname === sub.href,
							}
						)}
					>
						<span className="pb-[2px]">{sub.title}</span>
					</Link>
				))}
			</div>
		</>
	);
};
