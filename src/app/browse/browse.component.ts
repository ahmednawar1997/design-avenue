import { IfStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import * as service from './browse.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  items: Array<any>;
  itemsPerRow: number;
  @Input() filters: Array<any>;
  constructor() {

    this.items = service.getFrames();
    this.itemsPerRow = 3;
    this.filters = service.getFilters();
  }

  ngOnInit(): void {
  }

  rowNum = () => {
    const styles = {
      'flex-basis': (100 / this.itemsPerRow).toString() + '%',
      'max-width': (100 / this.itemsPerRow).toString() + '%'
    };
    return styles;
  }

  applyFilters = () => {
    console.log('filter')
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
}