import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  numberOfItemsInCart!: number;
  constructor(private cartService: CartService) {
    this.numberOfItemsInCart = 0;

  }

  ngOnInit(): void {
    this.cartService.itemsChanged.subscribe(items => this.numberOfItemsInCart = items.length);
    this.numberOfItemsInCart = this.cartService.items.length;

    console.log(this.numberOfItemsInCart);
  }

}
