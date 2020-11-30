import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as service from '../browse/browse.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  id!: number | null;
  item!: any;
  items!: Array<string>;
  config = { btnShow: { rotateClockwise: false, rotateCounterClockwise: false } };

  sizeSelected = '';
  colorSelected = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = service.getFrames()[this.id];
    console.log(this.item);
    this.items = ['https://images.unsplash.com/photo-1497296690583-da0e2a4ce49a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1488813340362-2a31b5522ebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1539975611936-f0d1221cfd16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80'];
  }


  selectSize = (size: string) => {

    if (this.sizeSelected === size) {
      this.sizeSelected = '';
    }
    this.sizeSelected = size;
  }

  selectColor = (color: string) => {

    if (this.colorSelected === color) {
      this.colorSelected = '';
    }
    this.colorSelected = color;
  }
}