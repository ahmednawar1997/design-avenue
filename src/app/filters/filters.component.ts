import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() filters!: Array<any>;
  constructor() {
  }

  ngOnInit(): void {
  }
  selectOption = (indx: number, selected: string) => {

    if (this.filters[indx].selected === selected) {
      this.filters[indx].selected = '';
      return;
    }
    this.filters[indx].selected = selected;
  }
}


