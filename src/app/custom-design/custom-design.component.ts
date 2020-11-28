import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-design',
  templateUrl: './custom-design.component.html',
  styleUrls: ['./custom-design.component.css']
})
export class CustomDesignComponent implements OnInit {
  // tslint:disable: variable-name

  @Input() background: string;
  @Input() frameText: string;
  @Input() textColor: string;
  private _borderColor: string;
  @Input() textSize: string;
  @Input() textFont: string;
  @Input() borderWidth: string;
  borderColors: Array<string>;
  textFonts: Array<string>;
  imageUrl: string;






  constructor() {
    this.background = '#ffffff';
    this.borderWidth = '20';
    this.textColor = 'black';
    this._borderColor = '#e6e6e67a';
    this.frameText = 'This is your text';
    this.textSize = '80';
    this.textFont = 'Dancing Script';
    this.borderColors = ['#a68009', '#2c2c2a', '#ffffff', '#6b6b6b'];
    this.textFonts = ['sans-serif', 'Brush Script MT', 'Roboto', 'Dancing Script', 'Times New Roman', 'Georgia', 'Palatino Linotype', 'Comic Sans MS', 'Trebuchet MS', 'Verdana', 'Lucida Console', 'Courier New'];
    this.imageUrl = '';

  }

  ngOnInit(): void {
  }
  get borderColor(): any {
    return this._borderColor;
  }

  @Input()
  set borderColor(val: any) {
    this._borderColor = val.toString() + '7a';
  }

  selectFont = (font: string) => {
    this.textFont = font;
  }

  onSelectFile = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (eventt: any) => {
        this.imageUrl = eventt.target.result;
      };
    }
  }
  setbackgroundImage = () => {
    let styles = {};

    if (this.imageUrl.length > 0) {
      styles = {
        'background-image': 'url(' + this.imageUrl + ')',
        'background-position': 'center',
        'background-size': 'cover',
        'z-index': '2'
      };
    } else {
      styles = {
        background: this.background
      };
    }

    return styles;
  }


}
