import Menu from '../models/menu';

const default1 = [
  {
    name: '디카페인 돌체 라떼',
    stock: 10,
    prices: [
      { size: 'Tall(355ml)', price: 5.9 },
      { size: 'Grande(473ml)', price: 6.4 },
      { size: 'Venti(591ml)', price: 6.9 },
    ],
  },
  {
    name: '디카페인 카라멜 마끼야또',
    stock: 9,
    prices: [
      { size: 'Tall(355ml)', price: 5.9 },
      { size: 'Grande(473ml)', price: 6.4 },
      { size: 'Venti(591ml)', price: 6.9 },
    ],
  },
  {
    name: '돌체 라떼',
    stock: 8,
    prices: [
      { size: 'Tall(355ml)', price: 5.6 },
      { size: 'Grande(473ml)', price: 6.1 },
      { size: 'Venti(591ml)', price: 6.6 },
    ],
  },
  {
    name: '화이트 초콜릿 모카',
    stock: 9,
    prices: [
      { size: 'Tall(355ml)', price: 5.6 },
      { size: 'Grande(473ml)', price: 6.1 },
      { size: 'Venti(591ml)', price: 6.6 },
    ],
  },
  {
    name: '디카페인 카페 라떼',
    stock: 5,
    prices: [
      { size: 'Tall(355ml)', price: 4.9 },
      { size: 'Grande(473ml)', price: 5.4 },
      { size: 'Venti(591ml)', price: 5.9 },
    ],
  },
  {
    name: '카페 라떼',
    stock: 100,
    prices: [
      { size: 'Tall(355ml)', price: 4.6 },
      { size: 'Grande(473ml)', price: 5.1 },
      { size: 'Venti(591ml)', price: 5.6 },
    ],
  },
  {
    name: '카푸치노',
    stock: 4,
    prices: [
      { size: 'Tall(355ml)', price: 4.6 },
      { size: 'Grande(473ml)', price: 5.1 },
      { size: 'Venti(591ml)', price: 5.6 },
    ],
  },
  {
    name: '디카페인 아메리카노',
    stock: 110,
    prices: [
      { size: 'Tall(355ml)', price: 4.4 },
      { size: 'Grande(473ml)', price: 4.9 },
      { size: 'Venti(591ml)', price: 5.4 },
    ],
  },
  {
    name: '아메리카노',
    stock: 10,
    prices: [
      { size: 'Tall(355ml)', price: 4.1 },
      { size: 'Grande(473ml)', price: 4.6 },
      { size: 'Venti(591ml)', price: 5.1 },
    ],
  },
];

const default2 = [
  {
    name: '콜드 폼 콜드브루',
    stock: 170,
    prices: [
      { size: 'Tall(355ml)', price: 5.8 },
      { size: 'Grande(473ml)', price: 6.3 },
      { size: 'Venti(591ml)', price: 6.5 },
    ],
  },
  {
    name: '바닐라 크림 콜드 브루',
    stock: 55,
    prices: [
      { size: 'Tall(355ml)', price: 5.5 },
      { size: 'Grande(473ml)', price: 6.0 },
      { size: 'Venti(591ml)', price: 6.5 },
    ],
  },
  {
    name: '콜드 브루',
    stock: 27,
    prices: [
      { size: 'Tall(355ml)', price: 4.5 },
      { size: 'Grande(473ml)', price: 5.0 },
      { size: 'Venti(591ml)', price: 5.5 },
    ],
  },
  {
    name: '돌체 콜드브루',
    stock: 32,
    prices: [
      { size: 'Tall(355ml)', price: 5.8 },
      { size: 'Grande(473ml)', price: 6.3 },
      { size: 'Venti(591ml)', price: 6.8 },
    ],
  },
];

export default function createFakeData() {
  const menus1 = [...Array(9).keys()].map(i => ({
    categoryId: 'coffeeespresso',
    categoryText: `커피 & 에스프레소`,
    name: `${default1[i].name}`,
    stock: `${default1[i].stock}`,
    prices: default1[i].prices,
  }));
  const menus2 = [...Array(4).keys()].map(i => ({
    categoryId: 'coldbrew',
    categoryText: `콜드브루`,
    name: `${default2[i].name}`,
    stock: `${default2[i].stock}`,
    prices: default2[i].prices,
  }));
  Menu.insertMany([...menus1, ...menus2], (err, docs) => {
    console.log(docs);
  });
}
