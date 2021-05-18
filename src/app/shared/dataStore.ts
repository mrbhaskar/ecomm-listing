import { ITypeProduct } from './interface';

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const vegetables: ITypeProduct[] = [
  {
    id: 'veg-1',
    title: 'Potato',
    price: 180,
    description: dummyText,
    image: 'potato.png',
  },
  {
    id: 'veg-2',
    title: 'Carrot',
    price: 56,
    description: dummyText,
    image: 'carrot.png',
  },
  {
    id: 'veg-3',
    title: 'Eggplant',
    price: 654,
    description: dummyText,
    image: 'eggplant.png',
  },
];

const groceries: ITypeProduct[] = [
  {
    id: 'groc-1',
    title: 'Soap',
    price: 180,
    description: dummyText,
    image: 'soap.png',
  },
  {
    id: 'groc-2',
    title: 'Spice',
    price: 56,
    description: dummyText,
    image: 'spice.png',
  },
  {
    id: 'groc-3',
    title: 'Rice',
    price: 654,
    description: dummyText,
    image: 'grain-sack.png',
  },
];

const fruits: ITypeProduct[] = [
  {
    id: 'fru-1',
    title: 'Apple',
    price: 180,
    description: dummyText,
    image: 'apple.png',
  },
  {
    id: 'fru-2',
    title: 'Banana',
    price: 56,
    description: dummyText,
    image: 'banana.png',
  },
  {
    id: 'fru-3',
    title: 'Orange',
    price: 654,
    description: dummyText,
    image: 'orange.png',
  },
];

const beverages: ITypeProduct[] = [
  {
    id: 'brev-1',
    title: 'Soft drinks',
    price: 180,
    description: dummyText,
    image: 'softdrinks.png',
  },
  {
    id: 'brev-2',
    title: 'Beer',
    price: 56,
    description: dummyText,
    image: 'beer.png',
  },
  {
    id: 'brev-3',
    title: 'Soda',
    price: 654,
    description: dummyText,
    image: 'can.png',
  },
];

export { vegetables, fruits, beverages, groceries };
