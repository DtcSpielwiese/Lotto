import { LottoServiceProvider } from './../../providers/lotto-service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AdminDto } from '../../model/adminDto';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage implements OnInit {

  daten: AdminDto;

  constructor(public navCtrl: NavController, public navParams: NavParams, private lottoServiceProvider: LottoServiceProvider, public toastCtrl: ToastController) {
  }

  ngOnInit() {
    this.daten = this.lottoServiceProvider.daten;
  }

  zahlenPoolChanged(){

    console.log('AdminPage.ZahlenPoolChanged - ' + this.daten.spielmodus.zahlenPool);
    this.lottoServiceProvider.ChangeZahlenMenge(this.daten.spielmodus.zahlenPool);


  }

  speichern() {
    console.log("Speichern...");
    let toast = this.toastCtrl.create({
      message: 'Eingaben wurden gespeichert!',
      duration: 1500
    });
    toast.present();
  }

}
