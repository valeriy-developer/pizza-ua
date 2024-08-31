import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	className?: string;
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	imageUrl,
	className,
}) => {
	return (
		<div className={cn(className)}>
			<Link href='/product/1'>
				<div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
					<img
						className='w-[215px] h-[215px] object-cover'
						src={imageUrl}
						alt={name}
					/>
				</div>
				<Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
				<p className='text-sm text-gray-400'>
					Курча, моцарелла, сири чеддер та пармезан, сирний соус, томати, соус
					альфредо, часник
				</p>
				<div className='flex justify-between items-center mt-4'>
					<span className='text-[20px]'>
						от <b>{price} ₽</b>
					</span>
					<Button variant='secondary' className='text-base font-bold'>
						<Plus size={20} className='w-4 h-4 mr-1' />
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	);
};
