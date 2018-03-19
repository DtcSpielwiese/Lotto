import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vergleich-rechner',
  templateUrl: './vergleich-rechner.component.html',
  styleUrls: ['./vergleich-rechner.component.scss']
})
export class VergleichRechnerComponent implements OnInit {
  get activeTab(): number {
    return this._activeTab;
  }

  set activeTab(value: number) {
    this._activeTab = value;
  }

  private _activeTab: number = 1;
  constructor() { }


  ngOnInit() {
  }

}
