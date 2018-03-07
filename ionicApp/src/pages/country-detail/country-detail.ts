import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RestApiProvider} from "../../providers/rest-api/rest-api";

/**
 * Generated class for the CountryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-country-detail',
  templateUrl: 'country-detail.html',
})
export class CountryDetailPage {

  country: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestApiProvider) {
    this.country = navParams.get("c");
  }

  get sprachen(): string{
    return this.country.languages.map(v => v.name).join(", ");
  }

  get blocs(): string{
    return this.country.regionalBlocs.map(v => v.acronym + " - " + v.name).join(", ");
  }

  get waehrungen(): string{
    return this.country.currencies.map(v => v.code + " - " + v.name + " - " + v.symbol).join(", ");
  }

  goDetail(countryCode) {
    console.log("goDetail.." + countryCode);
    let country = null;
    let countries: any[] = null;
    this.rest.getCountries()
      .subscribe(
        v => countries = v,
        error =>  {},
        () => {
          console.log("getCountries Complete...")
          country =  countries.filter(c => c.alpha3Code == countryCode)[0];
          console.log("Country=" + country);
          this.navCtrl.push(CountryDetailPage, {c: country});
        }
      );
  }

}
