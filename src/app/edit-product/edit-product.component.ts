import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css', '/node_modules/bootstrap/dist/css/bootstrap.css']
})
export class EditProductComponent implements OnInit {

  id!: number;
  item!: any;
  action!: string;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id === -1) {
      this.action = 'Add';
    } else {
      this.action = 'Edit';
      this.item = this.productService.getFrames()[this.id];
      console.log(this.item);
    }
  }



}
