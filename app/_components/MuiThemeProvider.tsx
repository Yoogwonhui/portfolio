'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { activeColor } from '../_lib/utils';

interface MuiWrapperProps {
	children: React.ReactNode;
}

const theme = createTheme({
	palette: {
		primary: {
			main: activeColor,
		},
	},
});

export default function RecoilRootWrapper({ children }: MuiWrapperProps) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
