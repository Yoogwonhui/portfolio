'use client';

import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useMediaQuery } from 'react-responsive';

export default function ModalComponent({
	buttonChildren,
	children,
	isVertical = false,
}: {
	buttonChildren: React.ReactNode;
	children: React.ReactNode;
	isVertical?: boolean;
}) {
	const isTablet = useMediaQuery({ query: '(max-width: 1224px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 1,
		width: isMobile
			? isVertical
				? '60vw'
				: '95vw'
			: isTablet
			? isVertical
				? '40vw'
				: '90vw'
			: isVertical
			? '20vw'
			: '70vw',
	};

	return (
		<div>
			<Button onClick={handleOpen}>{buttonChildren}</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>{children}</Box>
			</Modal>
		</div>
	);
}
