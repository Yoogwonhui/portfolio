import DrawerComponent from './DrawerComponent';
import NavbarMenuList from './NavbarMenuList';
import Link from 'next/link';
import Card from '@mui/material/Card';

export default async function NavbarLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="">
			<nav className="flex flex-col w-72 h-screen fixed hidden xl:block">
				<div
					className="flex items-center justify-center h-[80px] mx-4 box-border"
					style={{ borderBottom: '1px solid rgb(240, 242, 245)' }}
				>
					<Link href={'/'} className="no-underline">
						<div className="font-bold text-4xl text-black">
							유권희
						</div>
					</Link>
				</div>
				<NavbarMenuList />
			</nav>

			<div className="flex flex-col flex-grow xl:ml-72">
				<nav
					className="flex justify-between items-center h-[80px] sticky top-0 bg-white/[0.8] backdrop-blur-sm p-6 md:pr-14 box-border z-50"
					style={{
						boxShadow: '0px 0px 6px 0px rgba(0, 21, 41, 0.12)',
					}}
				>
					<div className="flex gap-10">
						<div className="xl:hidden ">
							<DrawerComponent />
						</div>
					</div>
				</nav>

				<div
					className="flex flex-grow justify-center box-border md:py-8"
					style={{
						backgroundColor: 'rgb(245, 245, 245)',
						minHeight: 'calc(100vh - 80px)',
					}}
				>
					<Card className="desktop-width box-border p-4 md:p-6 text-xs md:text-base">
						{children}
					</Card>
				</div>
			</div>
		</div>
	);
}
