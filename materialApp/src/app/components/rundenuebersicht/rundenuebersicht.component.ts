import { Component, OnInit } from '@angular/core';
import {AdminDto} from '../../model/adminDTO';
import {LottoService} from '../../providers/lotto.service';

@Component({
  selector: 'app-rundenuebersicht',
  templateUrl: './rundenuebersicht.component.html',
  styleUrls: ['./rundenuebersicht.component.scss']
})
export class RundenuebersichtComponent implements OnInit {
  private daten: AdminDto;
  showValue: boolean;

  constructor(private lottoService: LottoService) { }

  ngOnInit() {
    this.daten = this.lottoService.daten;
    this.showValue = false;
  }


}
