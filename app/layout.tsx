import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
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
					<NavbarLayout>{children}</NavbarLayout>
				</MuiThemeProvider>
			</body>
		</html>
	);
}
