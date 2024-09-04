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
		name: 'Омлет с ветчиной и грибами',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
		categoryId: 2,
	},
	{
		name: 'Омлет с пепперони',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
		categoryId: 2,
	},
	{
		name: 'Кофе Латте',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
		categoryId: 2,
	},
	{
		name: 'Дэнвич ветчина и сыр',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
		categoryId: 3,
	},
	{
		name: 'Куриные наггетсы',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
		categoryId: 3,
	},
	{
		name: 'Картофель из печи с соусом 🌱',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
		categoryId: 3,
	},
	{
		name: 'Додстер',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
		categoryId: 3,
	},
	{
		name: 'Острый Додстер 🌶️🌶️',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
		categoryId: 3,
	},
	{
		name: 'Ирландский Капучино',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
		categoryId: 4,
	},
	{
		name: 'Кофе Карамельный капучино',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
		categoryId: 4,
	},
	{
		name: 'Кофе Кокосовый латте',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
		categoryId: 4,
	},
	{
		name: 'Кофе Американо',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
		categoryId: 4,
	},
	{
		name: 'Кофе Латте',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
		categoryId: 4,
	},
];
