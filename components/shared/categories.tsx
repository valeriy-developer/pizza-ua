'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
	className?: string;
}

const categories = [
	{ id: 1, name: 'Піци' },
	{ id: 2, name: 'Комбо' },
	{ id: 3, name: 'Закуски' },
	{ id: 4, name: 'Коктейлі' },
	{ id: 5, name: 'Кава' },
	{ id: 6, name: 'Напої' },
	{ id: 7, name: 'Десерти' },
];

export const Categories: React.FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId);

	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
			{categories.map(({ name, id }, idx) => {
				return (
					<a
						key={idx}
						className={cn(
							'flex items-center font-bold h-11 rounded-2xl px-5',
							categoryActiveId === id &&
								'bg-white shadow-md shadow-gray-200 text-primary'
						)}
						href={`/#${name}`}>
						<button>{name}</button>
					</a>
				);
			})}
		</div>
	);
};
