import { Component, OnInit } from '@angular/core';
import { LottoServiceProvider } from '../../providers/lotto-service';
import { AdminDto } from '../../model/adminDto';

/**
 * Generated class for the RundenUebersichtComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'runden-uebersicht',
  templateUrl: 'runden-uebersicht.html'
})
export class RundenUebersichtComponent implements OnInit {

  daten: AdminDto;
  werteAnzeigen: boolean;

  constructor(private lottoServiceProvider: LottoServiceProvider) {
    console.log('Hello RundenUebersichtComponent Component');
  }

  ngOnInit() {
    this.daten = this.lottoServiceProvider.daten;
    this.werteAnzeigen = false;
  }

  wertAnzeigenOnChange() {

  }

}
