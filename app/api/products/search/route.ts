import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
	const query = req.nextUrl.searchParams.get('query') || '';

	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: query,
				mode: 'insensitive',
			},
		},
		take: 5,
	});

	return NextResponse.json(products);
};
