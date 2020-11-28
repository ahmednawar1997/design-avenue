import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: Array<string>;

  constructor() {
    this.slides = [];
    this.slides.push('/assets/images/category-men2.jpg');
    this.slides.push('/assets/images/category-women1.jpg');
    this.slides.push('/assets/images/category-kids1.jpg');

  }
  ngOnInit(): void {
  }
}

