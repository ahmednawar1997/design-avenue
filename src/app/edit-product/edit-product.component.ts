import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css', '/node_modules/bootstrap/dist/css/bootstrap.css']
})
export class EditProductComponent implements OnInit {

  id!: number;
  item!: any;
  action!: string;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = {};
    if (this.id === -1) {
      this.action = 'Add';
    } else {
      this.action = 'Edit';
      this.productService.fetchProductById(this.id).subscribe((data) => {
        this.item = data;
        console.log(this.item);
      });
    }
  }

  submitForm = () => {
    if (this.action === 'Add') { this.addProduct(); }
    else { this.editProduct(); }
  }

  addProduct = () => {
    this.productService.addProduct(this.item).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('admin');
    });
  }

  editProduct = () => {
    this.productService.editProduct(this.item).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('admin');
    });
  }
}
