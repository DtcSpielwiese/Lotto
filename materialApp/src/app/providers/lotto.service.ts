import { Injectable } from '@angular/core';
import {AdminDto} from '../model/adminDTO';
import {Spielmodus} from '../model/spielmodus';
import {Runde} from '../model/runde';
import {ZahlenMapping} from '../model/zahlenMapping';
import {isNullOrUndefined} from 'util';

@Injectable()
export class LottoService {

  daten: AdminDto;
  public anzahlVersuche: number;
  private zahlenVorrat: number[];
  constructor() {
    this.daten = new AdminDto(
      new Spielmodus(2, 6),
      [
        new ZahlenMapping(1,  'rot'),
        new ZahlenMapping(2,  'blau'),
        new ZahlenMapping(3,  'gelb'),
        new ZahlenMapping(4,  'grün'),
        new ZahlenMapping(5,  'magenta'),
        new ZahlenMapping(6,  'grau'),
      ],
      [
        new Runde([1,  2],  '22.02.2018'),
        new Runde([5,  4],  '23.02.2018'),
      ]
    );

  }

  public ChangeZahlenMenge(zahl: number) {

    var oldMapping: ZahlenMapping[] = this.daten.zahlenMappings;
    var newMapping: ZahlenMapping[] = [];
    for(let i=0; i<zahl;i++) {
      newMapping.push(new ZahlenMapping(i + 1, i<oldMapping.length ? oldMapping[i].wert : ""));
    }
    this.daten.zahlenMappings = newMapping;
  }

  public anzahlVersucheOderMax() : number {
    return this.versuchMoeglich() ? this.anzahlVersuche + 1 : this.daten.spielmodus.maxAnzahlVersuche;
  }

  public versuchNotieren() {
    this.anzahlVersuche++;

    if (this.anzahlVersuche == 1) { //erster Versuch, Zahlen-Vorrat bilden
      this.zahlenVorrat = [];
      for(let i=1; i<=this.daten.spielmodus.zahlenPool;i++) {
        this.zahlenVorrat.push(i);
      }
    }

    var zahlen: number[] = [];
    for(let i=0; i<this.daten.spielmodus.anzahlZahlen;i++) {
      var index = Math.floor(Math.random()*this.zahlenVorrat.length);
      zahlen.push(this.zahlenVorrat[index]);
      this.zahlenVorrat.splice(index, 1);
    }
    var date = new Date();
    this.daten.runden.push(new Runde(zahlen, `${this.formatDateZahl(date.getDate())}.${this.formatDateZahl(date.getMonth() + 1)}.${date.getFullYear()} ${this.formatDateZahl(date.getHours())}:${this.formatDateZahl(date.getMinutes())}:${this.formatDateZahl(date.getSeconds())}`));

  }

  public getText(zahl: number) : string {
    var wert: string = "unbekannt";
    this.daten.zahlenMappings.forEach(v => {
      if (v.zahl === zahl) {
        wert = v.wert;
      }
    });
    return wert;
  }

  public rundenVersucheLoeschen() {
    this.anzahlVersuche = 0;
    this.daten.runden = [];
  }

  public versuchMoeglich() : boolean {
    return this.anzahlVersuche < this.daten.spielmodus.maxAnzahlVersuche;
  }

  private formatDateZahl(i: number) : string {
    return i < 10 ? "0" + i : "" + i;
  }





}
