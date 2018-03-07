import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RestApiProvider} from "../../providers/rest-api/rest-api";
import {CountryDetailPage} from "../country-detail/country-detail";

/**
 * Generated class for the CountriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-countries',
  templateUrl: 'countries.html',
})
export class CountriesPage implements OnInit{


  current_page: number = 0;
  paging: number = 10;

  countries: any[];
  countries_paging: any[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestApiProvider) {
  }

  ngOnInit(): void {
    this.getCountries();
    //this.countries_paging = this.countries.slice(0,10);
  }

  getCountries() {
    this.rest.getCountries()
      .subscribe(
        v => this.countries = v,
        error =>  this.errorMessage = <any>error
      , () => {
          this.countries.sort((c1, c2) =>
          {
            console.log("sort....");
            if (c1.translations["de"] < c2.translations["de"]) return -1;
            else if (c1.translations["de"] > c2.translations["de"]) return 1;
            return 0;
          });
          this.countries_paging = this.countries.slice(this.current_page, this.paging)
        });
  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {
      this.current_page++;
      this.countries_paging.push(...this.countries.slice(this.paging*this.current_page + 1, this.paging*this.current_page + this.paging));
      infiniteScroll.complete();
    },500);

  }

  goDetail(country) {
    console.log("goDetail.." + country.name);
    this.navCtrl.push(CountryDetailPage, {c: country});
  }

}
