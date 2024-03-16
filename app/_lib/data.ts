export const introduceData = {
	name: '유권희',
	title: '꾸준히 성장하는 개발자',
	subtitle: '안녕하세요! 꾸준히 성장하는 프론트엔드 개발자 유권희 입니다,',
	introduceList: [
		'도전적인 목표를 통해, 습득하고 배우는 과정을 즐깁니다.',
		'개발자의 편한 개발보다 사용자의 편의를 더 중요하게 생각합니다.',
		'한 번 시작한 일은 끝까지 완수를 해야 하는 성격 탓에 엉덩이 무겁다는 말을 많이 듣습니다.',
	],

	birthday: '1997. 01. 12',
	residence: '경기도 성남시',
	email: 'yoogwonhee@naver.com',
	university: '충남대학교 컴퓨터공학과',
	phone: '010-7209-5036',
};

export const projectData = {
	interminds_storepop: {
		name: '(인터마인즈) 무인매장 관리자 웹',
		skills: {
			front: [
				'TypeScript',
				'React',
				'Nextjs',
				'Recoil',
				'Mui',
				'Tailwind CSS',
			],
			storage: ['AWS S3'],
		},
		works: [
			'지점 등록 / 상태조회 , 진열도 등록 , 상품 등록',
			'회원 관리 기능',
			'판매 관리',
			'환불 및 재결제',
			'매장 CCTV 영상 확인 기능',
			'운영 및 배포',
		],
	},
	interminds_pwa: {
		name: '(인터마인즈) 무인매장 결제 PWA',
		skills: {
			front: ['Javascript', 'React', 'Recoil'],
			storage: ['AWS S3'],
		},
		works: [
			'로그인 기능 ( 카카오로그인 , 자체로그인 )',
			'결제 api 연동',
			'적립금 / 쿠폰 관리 기능',
			'구매내역',
		],
	},
	interminds_admin: { name: '(인터마인즈) 관리자웹' },
	interminds_cs: { name: '(인터마인즈) CS 관리 웹' },
	psdl_web: { name: '(피에스디엘) 오늘은 더치페이 사장님 웹' },
	psdl_tablet: { name: '(피에스디엘) 오늘은 더치페이 Tablet 앱' },
	psdl_app: { name: '(피에스디엘) 오늘은 더치페이 앱' },
	bhaptics_login: { name: '(비햅틱스) 통합로그인 웹페이지' },
	bhaptics_app: { name: '(비햅틱스) 비햅틱스 플레이어' },
	secondGround: { name: '(세컨그라운드) 물품 관리 페이지' },
	animal: { name: '동물상테스트' },
	portfolio: { name: '포트폴리오' },
};

export const workData = [
	{
		company: '인터마인즈',
		department: 'sw그룹',
		position: '연구원',
		period: '22.08 ~ 재직중',
		skills: [
			'React',
			'ReactPWA',
			'Nextjs',
			'JavaScript',
			'TypeScript',
			'TypeScript',
			'AWS Amplify',
			'AWS Cognito',
			'AWS S3',
			'Nodejs',
			'Express',
			'PostgreSQL',
			'Redis',
			'InfluxDB',
		],
	},
	{
		company: '피에스디엘',
		department: 'sw개발팀',
		position: '연구원',
		period: '22.04 ~ 22.08',
		skills: [
			'React',
			'React-native',
			'TypeScript',
			'AWS Amplify',
			'AWS Cognito',
			'AWS DynamoDB',
			'AWS S3',
		],
	},
	{
		company: '비햅틱스',
		department: 'sw개발팀',
		position: '인턴',
		period: '21.08 ~ 21.12',
		skills: ['React', 'React-native', 'TypeScript', 'Firebase'],
	},
	{
		company: '세컨그라운드',
		department: '개발팀',
		position: '인턴',
		period: '20.12 ~ 21.02',
		skills: ['Spring framework', 'Java', 'Html', 'Css'],
	},
];
