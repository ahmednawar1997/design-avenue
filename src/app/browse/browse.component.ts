import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  items: Array<any>;
  itemsPerRow: number;
  @Input() filters: Array<any>;
  constructor(private router: Router, private productService: ProductService) {

    this.items = this.productService.getFrames();
    this.itemsPerRow = 3;
    this.filters = this.productService.getFilters();
  }

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe((data) => {
      console.log(data);
    });
  }

  rowNum = () => {
    const styles = {
      'flex-basis': (100 / this.itemsPerRow).toString() + '%',
      'max-width': (100 / this.itemsPerRow).toString() + '%'
    };
    return styles;
  }

  applyFilters = () => {
    for (const item of this.items) {
      let flag = true;
      for (const filter of this.filters) {
        if (filter.selected === '' || item.tags.findIndex((el: string) => el === filter.selected.toLowerCase()) !== -1) {
          flag = true;
        }
        else {
          flag = false;
          break;
        }
      }
      item.isShown = flag;
    }
  }


  redirectViewPage = (id: number) => {
    this.router.navigateByUrl(this.router.url + '/' + id);
  }
}
