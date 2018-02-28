import { Component, OnInit } from '@angular/core';
import {LottoService} from '../../providers/lotto.service';
import {AdminDto} from '../../model/adminDTO';

@Component({
  selector: 'app-ziehung',
  templateUrl: './ziehung.component.html',
  styleUrls: ['./ziehung.component.scss']
})
export class ZiehungComponent implements OnInit {
  daten: AdminDto;
  btnText: string = 'Zahlen ziehen';
  constructor(private lottoService: LottoService) { }

  ngOnInit() {
    this.daten = this.lottoService.daten;
  }

}
