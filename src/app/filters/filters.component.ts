import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() filters!: Array<any>;
  @Output() filtersChange = new EventEmitter<Array<any>>();
  constructor() {
  }

  ngOnInit(): void {
  }
  selectOption = (indx: number, selected: string) => {

    if (this.filters[indx].selected === selected) {
      this.filters[indx].selected = '';
    } else {
      this.filters[indx].selected = selected;
    }
    this.filtersChange.emit();
  }
  clearSelected = () => {
    for (const item of this.filters) {
      item.selected = '';
    }
    this.filtersChange.emit();
  }


}


