import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  themes: SelectItem[];
  selectedTheme: string;

  ngOnInit(): void {
    this.selectedTheme = window.localStorage.getItem('theme') == null ? 'bootstrap' : window.localStorage.getItem('theme');
    require('style-loader!./themes/' + this.selectedTheme + '.scss');
    this.themes = [
      { label: 'bootstrap', value: 'bootstrap' },
      { label: 'cruze', value: 'cruze' },
      { label: 'cupertino', value: 'cupertino' },
      { label: 'darkness', value: 'darkness' },
      { label: 'flick', value: 'flick' },
      { label: 'home', value: 'home' },
      { label: 'kasper', value: 'kasper' },
      { label: 'lightness', value: 'lightness' },
      { label: 'ludvig', value: 'ludvig' },
      { label: 'omega', value: 'omega' },
      { label: 'pepper-grinder', value: 'pepper-grinder' },
      { label: 'redmond', value: 'redmond' },
      { label: 'rocket', value: 'rocket' },
      { label: 'south-street', value: 'south-street' },
      { label: 'start', value: 'start' },
      { label: 'trontastic', value: 'trontastic' },
      { label: 'voclain', value: 'voclain' },
    ] ;
  }


  themeChange(): void {
    console.log('Theme: ' + this.selectedTheme);
    window.localStorage.setItem('theme', this.selectedTheme);
    window.location.reload();
  }


}
