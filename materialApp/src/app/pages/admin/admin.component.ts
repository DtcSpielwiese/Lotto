import { Component, OnInit } from '@angular/core';
import {LottoService} from '../../providers/lotto.service';
import {AdminDto} from '../../model/adminDTO';
import {MatTableDataSource} from '@angular/material';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns = ['zahl', 'wert'];
  daten: AdminDto;
  private dataSource: MatTableDataSource<any>;

  constructor(private lottoService: LottoService, public snackBar: MatSnackBar) { }


  editField(field: string, editValue: string, el: any) {
    let idx = this.dataSource.data.findIndex(ele => el.zahl == ele.zahl);
    this.dataSource.data[idx][field] = editValue;
  }

  openSnackBar(message: string) {
  this.snackBar.open(message, null, {
      duration: 2000,
    });
  }


  ngOnInit() {
    this.daten = this.lottoService.daten;
    this.dataSource = new MatTableDataSource(this.daten.zahlenMappings);
  }

}
