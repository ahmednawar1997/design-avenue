import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '/node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AdminComponent implements OnInit {
  products!: Array<any>;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    // this.products = this.productService.getFrames();
    this.productService.fetchProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  removeProduct = (index: number) => {
    this.productService.removeProduct(index).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }


}
