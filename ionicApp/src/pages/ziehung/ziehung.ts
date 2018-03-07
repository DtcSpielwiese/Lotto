import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminDto } from '../../model/adminDto';
import { LottoServiceProvider } from '../../providers/lotto-service';

/**
 * Generated class for the ZiehungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ziehung',
  templateUrl: 'ziehung.html',
})
export class ZiehungPage implements OnInit {

  daten: AdminDto;

  constructor(public navCtrl: NavController, public navParams: NavParams, private lottoServiceProvider: LottoServiceProvider) {
  }

  ngOnInit() {
    this.daten = this.lottoServiceProvider.daten;
  }


}
