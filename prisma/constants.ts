export const categories = [
	{
		name: 'Піци',
	},
	{
		name: 'Закуски',
	},
	{
		name: 'Десерти',
	},
];

export const _ingredients = [
	{
		name: 'Баварські ковбаски',
		price: 179,
		imageUrl: '/ingredients/bavarski-kovbasky.png',
	},
	{
		name: 'Вершкова моцарелла',
		price: 79,
		imageUrl: '/ingredients/vershkova-motsarella.png',
	},
	{
		name: 'Гострий перець халапеньо',
		price: 79,
		imageUrl: '/ingredients/hostry-perets-khalapenyo.png',
	},
	{
		name: 'Італійські трави',
		price: 59,
		imageUrl: '/ingredients/italiyski-travy.png',
	},
	{
		name: 'Креветки',
		price: 79,
		imageUrl: '/ingredients/krevеtky.png',
	},
	{
		name: 'Мітболи',
		price: 59,
		imageUrl: '/ingredients/mitboly.png',
	},
	{
		name: 'Ніжне курча',
		price: 79,
		imageUrl: '/ingredients/nizhne-kurcha.png',
	},
	{
		name: 'Печериці',
		price: 79,
		imageUrl: '/ingredients/pecherytsi.png',
	},
	{
		name: 'Пряна яловичина',
		price: 79,
		imageUrl: '/ingredients/pryаna-yalovychyna.png',
	},
	{
		name: 'Сири чеддер і пармезан',
		price: 59,
		imageUrl: '/ingredients/syry-cheddar-i-parmezan.png',
	},
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
	{
		name: 'Додстер із шинкою',
		imageUrl: '/appetizers/dodster-iz-shynkoyu.png',
		categoryId: 2,
	},
	{
		name: 'Додстер',
		imageUrl: '/appetizers/dodster.png',
		categoryId: 2,
	},
	{
		name: 'Картопля з печі з соусом',
		imageUrl: '/appetizers/kartoplya-z-pechi-z-sousom.png',
		categoryId: 2,
	},
	{
		name: 'Картопля з печі',
		imageUrl: '/appetizers/kartoplya-z-pechi.png',
		categoryId: 2,
	},
	{
		name: 'Курячі крила барбекю',
		imageUrl: '/appetizers/kuryachi-kryla-barbekyu.png',
		categoryId: 2,
	},
	{
		name: 'Курячі шматочки',
		imageUrl: '/appetizers/kuryachi-shmatochky.png',
		categoryId: 2,
	},
	{
		name: 'Паста карбонара',
		imageUrl: '/appetizers/pasta-karbonara.png',
		categoryId: 2,
	},
	{
		name: "Паста м'ясна",
		imageUrl: '/appetizers/pasta-miasna.png',
		categoryId: 2,
	},
	{
		name: 'Паста песто',
		imageUrl: '/appetizers/pasta-pesto.png',
		categoryId: 2,
	},
	{
		name: "Суперм'ясний додстер",
		imageUrl: '/appetizers/supermiasnyi-dodster.png',
		categoryId: 2,
	},
	{
		name: 'Сирники з малиновим варенням',
		imageUrl: '/deserts/syrnyky-z-malynovym-varennyam.png',
		categoryId: 3,
	},
	{
		name: 'Сирники зі згущеним молоком',
		imageUrl: '/deserts/syrnyky-zi-zghushchenym-molokom.png',
		categoryId: 3,
	},
	{
		name: 'Сирники',
		imageUrl: '/deserts/syrnyky.png',
		categoryId: 3,
	},
	{
		name: 'Маффін три шоколади',
		imageUrl: '/deserts/maffin-try-shokolady.png',
		categoryId: 3,
	},
	{
		name: 'Фондан',
		imageUrl: '/deserts/fondan.png',
		categoryId: 3,
	},
];
