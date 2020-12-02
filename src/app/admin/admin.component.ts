import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products!: Array<any>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getFrames();
  }

  editProduct = (index: number) => {

  }

  removeProduct = (index: number) => {
    this.productService.removeProduct(index);
  }


}
