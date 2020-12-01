import { ProductService } from './../product.service';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  items!: Array<any>;
  itemsInCart!: Array<any>;

  totalPrice!: number;

  constructor(private cartService: CartService, private productService: ProductService) {
    this.items = this.productService.getFrames();
    this.itemsInCart = [];
  }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.items;
    this.cartService.itemsChanged.subscribe(items => this.itemsInCart = items);
    this.totalPrice = this.itemsInCart.reduce((sum, currentItem) => sum + Number(currentItem.price), 0);
    console.log(this.totalPrice)
  }

  addToCart = (item: any) => {
    this.cartService.addOneItem(item);
  }

  removeFromCart = (item: any) => {
    this.cartService.removeOneItem(item);
  }

}
