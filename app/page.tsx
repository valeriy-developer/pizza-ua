import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from '@/components/shared';

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Усі піци' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />
			<Container className='mt-10 pb-14'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Піци'
								items={[
									{
										id: 1,
										name: 'Чизбургер-піца',
										imageUrl: '/ingredients/nizhne-kurcha.png',
										price: 220,
										items: [{ price: 220 }],
									},
									{
										id: 2,
										name: 'Чизбургер-піца',
										imageUrl:
											'https://assets.dots.live/misteram-public/eb7aba33-cfcc-403d-a523-097317fe1b57-826x0.png',
										price: 220,
										items: [{ price: 220 }],
									},
									{
										id: 3,
										name: 'Чизбургер-піца',
										imageUrl:
											'https://assets.dots.live/misteram-public/eb7aba33-cfcc-403d-a523-097317fe1b57-826x0.png',
										price: 220,
										items: [{ price: 220 }],
									},
									{
										id: 4,
										name: 'Чизбургер-піца',
										imageUrl:
											'https://assets.dots.live/misteram-public/eb7aba33-cfcc-403d-a523-097317fe1b57-826x0.png',
										price: 220,
										items: [{ price: 220 }],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Комбо'
								items={[
									{
										id: 1,
										name: 'Чизбургер-піца',
										imageUrl: '/ingredients/nizhne-kurcha.png',
										price: 220,
										items: [{ price: 220 }],
									},
									{
										id: 2,
										name: 'Чизбургер-піца',
										imageUrl:
											'https://assets.dots.live/misteram-public/eb7aba33-cfcc-403d-a523-097317fe1b57-826x0.png',
										price: 220,
										items: [{ price: 220 }],
									},
									{
										id: 3,
										name: 'Чизбургер-піца',
										imageUrl:
											'https://assets.dots.live/misteram-public/eb7aba33-cfcc-403d-a523-097317fe1b57-826x0.png',
										price: 220,
										items: [{ price: 220 }],
									},
									{
										id: 4,
										name: 'Чизбургер-піца',
										imageUrl:
											'https://assets.dots.live/misteram-public/eb7aba33-cfcc-403d-a523-097317fe1b57-826x0.png',
										price: 220,
										items: [{ price: 220 }],
									},
								]}
								categoryId={2}
							/>
							<ProductsGroupList
								title='Закуски'
								items={[
									{
										id: 1,
										name: 'Чизбургер-піца',
										imageUrl: '/ingredients/nizhne-kurcha.png',
										price: 220,
										items: [{ price: 220 }],
									},
									{
										id: 2,
										name: 'Чизбургер-піца',
										imageUrl:
											'https://assets.dots.live/misteram-public/eb7aba33-cfcc-403d-a523-097317fe1b57-826x0.png',
										price: 220,
										items: [{ price: 220 }],
									},
									{
										id: 3,
										name: 'Чизбургер-піца',
										imageUrl:
											'https://assets.dots.live/misteram-public/eb7aba33-cfcc-403d-a523-097317fe1b57-826x0.png',
										price: 220,
										items: [{ price: 220 }],
									},
									{
										id: 4,
										name: 'Чизбургер-піца',
										imageUrl:
											'https://assets.dots.live/misteram-public/eb7aba33-cfcc-403d-a523-097317fe1b57-826x0.png',
										price: 220,
										items: [{ price: 220 }],
									},
								]}
								categoryId={3}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
