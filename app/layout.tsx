import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import RecoilRootWrapper from './_recoil/RecoilRootWrapper';
import MuiThemeProvider from './_components/MuiThemeProvider';
import NavbarLayout from './_components/navbar/NavbarLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '유권희 포트폴리오',
	description: '유권희 포트폴리오',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className}`} id="__next">
				<MuiThemeProvider>
					<RecoilRootWrapper>
						<NavbarLayout>{children}</NavbarLayout>
					</RecoilRootWrapper>
				</MuiThemeProvider>
			</body>
		</html>
	);
}
