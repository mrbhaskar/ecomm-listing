import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITypeProduct } from '../shared/interface';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  categories = [
    {
      id: 'cat-1',
      name: 'Vegetables',
      type: 'vegetables',
      desc: 'Lorem ipsum',
      img: 'vegetable.png',
    },
    {
      id: 'cat-2',
      name: 'Groceries',
      type: 'groceries',
      desc: 'Lorem ipsum',
      img: 'groceries.png',
    },
    {
      id: 'cat-3',
      name: 'Fruits',
      type: 'fruits',
      desc: 'Lorem ipsum',
      img: 'fruits.png',
    },
    {
      id: 'cat-4',
      name: 'Beverages',
      type: 'beverages',
      desc: 'Lorem ipsum',
      img: 'cocktail.png',
    },
  ];

  vegetables: ITypeProduct[] = [
    {
      id: 'veg-1',
      title: 'Potato',
      price: 180,
      description: this.dummyText,
      image: 'potato.png',
    },
    {
      id: 'veg-2',
      title: 'Carrot',
      price: 56,
      description: this.dummyText,
      image: 'carrot.png',
    },
    {
      id: 'veg-3',
      title: 'Eggplant',
      price: 654,
      description: this.dummyText,
      image: 'eggplant.png',
    },
  ];

  groceries: ITypeProduct[] = [
    {
      id: 'groc-1',
      title: 'Soap',
      price: 180,
      description: this.dummyText,
      image: 'soap.png',
    },
    {
      id: 'groc-2',
      title: 'Spice',
      price: 56,
      description: this.dummyText,
      image: 'spice.png',
    },
    {
      id: 'groc-3',
      title: 'Rice',
      price: 654,
      description: this.dummyText,
      image: 'grain-sack.png',
    },
  ];

  fruits: ITypeProduct[] = [
    {
      id: 'fru-1',
      title: 'Apple',
      price: 180,
      description: this.dummyText,
      image: 'apple.png',
    },
    {
      id: 'fru-2',
      title: 'Banana',
      price: 56,
      description: this.dummyText,
      image: 'banana.png',
    },
    {
      id: 'fru-3',
      title: 'Orange',
      price: 654,
      description: this.dummyText,
      image: 'orange.png',
    },
  ];

  beverages: ITypeProduct[] = [
    {
      id: 'brev-1',
      title: 'Soft drinks',
      price: 180,
      description: this.dummyText,
      image: 'softdrinks.png',
    },
    {
      id: 'brev-2',
      title: 'Beer',
      price: 56,
      description: this.dummyText,
      image: 'beer.png',
    },
    {
      id: 'brev-3',
      title: 'Soda',
      price: 654,
      description: this.dummyText,
      image: 'can.png',
    },
  ];

  private headerColor: Subject<string> = new Subject();

  constructor() {}

  public setHeaderColor(color: string) {
    this.headerColor.next(color);
  }

  public getHeaderColor() {
    return this.headerColor.asObservable();
  }
}
