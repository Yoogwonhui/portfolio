'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarMenuList from './NavbarMenuList';

export default function DrawerComponent() {
	const [open, setOpen] = useState(false);

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setOpen(open);
		};

	return (
		<>
			<MenuIcon
				className="cursor-pointer hover:text-gray-400"
				onClick={toggleDrawer(true)}
			/>

			<SwipeableDrawer
				anchor={'left'}
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				<Box className="w-72">
					<NavbarMenuList />
				</Box>
			</SwipeableDrawer>
		</>
	);
}
