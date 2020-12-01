import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items!: Array<any>;
  itemsChanged = new Subject<Array<any>>();
  constructor() {
    this.items = this.getItemsFromLocalStorage();
  }

  removeItemFromCart = (index: number) => {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items);
    this.setItemsInLocalStorage(this.items);
  }

  addOneItem = (newItem: any) => {
    const indx = this.items.findIndex(item => item === newItem);
    if (indx !== -1) {
      this.items[indx].number = this.items[indx].number + 1;
    } else {
      newItem.number = newItem.number + 1;
      this.items.push(newItem);
    }
    this.itemsChanged.next(this.items);
    this.setItemsInLocalStorage(this.items);
  }

  removeOneItem = (newItem: any) => {
    const indx = this.items.findIndex(item => item === newItem);

    if (this.items[indx].number === 1) {
      this.removeItemFromCart(indx);
      return;
    }
    this.items[indx].number = this.items[indx].number - 1;
    this.itemsChanged.next(this.items);
    this.setItemsInLocalStorage(this.items);
  }

  private getItemsFromLocalStorage = () => {
    const localStorageItems = localStorage.getItem('items');
    if (localStorageItems) {
      return JSON.parse(localStorageItems);
    } else {
      return [];
    }
  }

  private setItemsInLocalStorage = (items: any) => {
    localStorage.setItem('items', JSON.stringify(items));
  }
}


