import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				<div className='flex items-center gap-4'>
					<Image src='/logo.png' alt='Logo' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercase font-black'>Pizza UA</h1>
						<p className='text-sm text-gray-400 leading-3'>Смачніше нікуди</p>
					</div>
				</div>
			</Container>
		</header>
	);
};
