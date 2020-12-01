import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import * as service from '../browse/browse.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  items!: Array<any>;
  itemsInCart!: Array<any>;

  totalPrice!: number;

  constructor(private cartService: CartService) {
    this.items = service.getFrames();
    this.itemsInCart = [];
  }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.items;
    this.cartService.itemsChanged.subscribe(items => this.itemsInCart = items);
  }

  addToCart = (item: any) => {
    this.cartService.addOneItem(item);
  }

  removeFromCart = (item: any) => {

    this.cartService.removeOneItem(item);
  }

}
