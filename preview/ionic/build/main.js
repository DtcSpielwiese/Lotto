webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_lotto_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = (function () {
    function AdminPage(navCtrl, navParams, lottoServiceProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lottoServiceProvider = lottoServiceProvider;
        this.toastCtrl = toastCtrl;
    }
    AdminPage.prototype.ngOnInit = function () {
        this.daten = this.lottoServiceProvider.daten;
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.zahlenPoolChanged = function () {
        console.log('AdminPage.ZahlenPoolChanged - ' + this.daten.spielmodus.zahlenPool);
        this.lottoServiceProvider.ChangeZahlenMenge(this.daten.spielmodus.zahlenPool);
    };
    AdminPage.prototype.speichern = function () {
        console.log("Speichern...");
        var toast = this.toastCtrl.create({
            message: 'Eingaben wurden gespeichert!',
            duration: 1500
        });
        toast.present();
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Projekte\DTC\Lotto\ionicApp\src\pages\admin\admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Einstellungen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <b>Definition der Zahlenbereiche\n        <span *ngIf="daten.spielmodus?.anzahlZahlen && daten.spielmodus?.zahlenPool">({{ daten.spielmodus?.anzahlZahlen }} aus {{ daten.spielmodus?.zahlenPool }})</span>\n      </b>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>Anzahl Zahlen, z.B.\n          <b>6</b>\n        </ion-label>\n        <ion-input type="number" clearInput="true" [(ngModel)]="daten.spielmodus.anzahlZahlen" min="1" max="10"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Wertebereich (aus), z.B.\n          <b>49</b>\n        </ion-label>\n        <ion-input (change)="zahlenPoolChanged()" [(ngModel)]="daten.spielmodus.zahlenPool" min="1" max="100" type="number"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n      <ion-card-header>\n        <b>Mapping der Zahlen</b>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n            <ion-item *ngFor="let zm of daten.zahlenMappings; index as i">\n                <ion-input disabled="true" placeholder="Zahl" [(ngModel)]="zm.zahl" item-start type="number" min="1" [max]="daten.spielmodus.anzahlZahlen"></ion-input>\n                <ion-input placeholder="Wert" [(ngModel)]="zm.wert" item-end type="text"></ion-input>\n              </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n    <div style="padding:10px">\n        <button (click)="speichern()"   ion-button large="false" round="true" full="true">\n            Speichern\n        </button>\n      </div>\n\n    <ion-card *ngIf="daten.runden.length > 0">\n        <ion-card-header>\n          <b>Gespielte Runden</b>\n        </ion-card-header>\n        <ion-card-content>\n            <runden-uebersicht></runden-uebersicht>\n            <button (click)="lottoServiceProvider.rundenVersucheLoeschen()"  ion-button large="false" round="true" full="true">\n                Ergebnisse löschen\n            </button>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Projekte\DTC\Lotto\ionicApp\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_lotto_service__["a" /* LottoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_lotto_service__["a" /* LottoServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]) === "function" && _d || Object])
    ], AdminPage);
    return AdminPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZiehungPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lotto_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ZiehungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZiehungPage = (function () {
    function ZiehungPage(navCtrl, navParams, lottoServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lottoServiceProvider = lottoServiceProvider;
    }
    ZiehungPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ZiehungPage');
    };
    ZiehungPage.prototype.ngOnInit = function () {
        this.daten = this.lottoServiceProvider.daten;
    };
    ZiehungPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ziehung',template:/*ion-inline-start:"C:\Projekte\DTC\Lotto\ionicApp\src\pages\ziehung\ziehung.html"*/'<!--\n  Generated template for the ZiehungPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ziehung der Lotto-Zahlen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  Willkommen zur Ziehung <b>{{ daten.spielmodus?.anzahlZahlen }} aus {{ daten.spielmodus?.zahlenPool }}</b>.\n  Es stehen Ihnen maximal <b>{{ daten.spielmodus?.maxAnzahlVersuche }}</b> Versuche zur Verfügung.\n\n\n  <button [disabled]="!lottoServiceProvider.versuchMoeglich()" (click)="lottoServiceProvider.versuchNotieren()" ion-button large="false" round="true" full="true">\n      {{ lottoServiceProvider.anzahlVersucheOderMax() }}. Versuch\n  </button>\n\n  <br>\n  <runden-uebersicht></runden-uebersicht>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projekte\DTC\Lotto\ionicApp\src\pages\ziehung\ziehung.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_lotto_service__["a" /* LottoServiceProvider */]])
    ], ZiehungPage);
    return ZiehungPage;
}());

//# sourceMappingURL=ziehung.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		281,
		1
	],
	"../pages/ziehung/ziehung.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spielmodus; });
var Spielmodus = (function () {
    function Spielmodus(anzahlZahlen, zahlenPool) {
        this.anzahlZahlen = anzahlZahlen;
        this.zahlenPool = zahlenPool;
    }
    Object.defineProperty(Spielmodus.prototype, "maxAnzahlVersuche", {
        get: function () {
            return Math.floor(this.zahlenPool / this.anzahlZahlen);
        },
        enumerable: true,
        configurable: true
    });
    return Spielmodus;
}());

//# sourceMappingURL=spielmodus.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZahlenMapping; });
var ZahlenMapping = (function () {
    function ZahlenMapping(zahl, wert) {
        this.zahl = zahl;
        this.wert = wert;
    }
    return ZahlenMapping;
}());

//# sourceMappingURL=zahlenMapping.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Runde; });
var Runde = (function () {
    function Runde(zahlen, timestamp) {
        this.zahlen = zahlen;
        this.timestamp = timestamp;
    }
    Object.defineProperty(Runde.prototype, "gezogeneZahlen", {
        get: function () {
            return this.zahlen.join(", ");
        },
        enumerable: true,
        configurable: true
    });
    return Runde;
}());

//# sourceMappingURL=runde.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ziehung_ziehung__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tabAbout = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tabAdmin = __WEBPACK_IMPORTED_MODULE_2__admin_admin__["a" /* AdminPage */];
        this.tabZiehung = __WEBPACK_IMPORTED_MODULE_3__ziehung_ziehung__["a" /* ZiehungPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Projekte\DTC\Lotto\ionicApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tabZiehung" tabTitle="Ziehung" tabIcon="play"></ion-tab>\n  <ion-tab [root]="tabAdmin" tabTitle="Admin" tabIcon="settings"></ion-tab>\n  <ion-tab [root]="tabAbout" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Projekte\DTC\Lotto\ionicApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Projekte\DTC\Lotto\ionicApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    &copy; msg systems ag<br>\n    Robert-Bürkle-Straße 1<br>\n    85737 Ismaning\n\n</ion-content>\n'/*ion-inline-end:"C:\Projekte\DTC\Lotto\ionicApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_admin_admin__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ziehung_ziehung__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_lotto_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ziehung_ziehung__["a" /* ZiehungPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ziehung/ziehung.module#ZiehungPageModule', name: 'ZiehungPage', segment: 'ziehung', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ziehung_ziehung__["a" /* ZiehungPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_lotto_service__["a" /* LottoServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spielmodus__ = __webpack_require__(154);
/* unused harmony reexport Spielmodus */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zahlenMapping__ = __webpack_require__(155);
/* unused harmony reexport ZahlenMapping */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runde__ = __webpack_require__(156);
/* unused harmony reexport Runde */



var AdminDto = (function () {
    function AdminDto(spielmodus, zahlenMappings, runden) {
        this.spielmodus = spielmodus;
        this.zahlenMappings = zahlenMappings;
        this.runden = runden;
    }
    return AdminDto;
}());

//# sourceMappingURL=adminDto.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Projekte\DTC\Lotto\ionicApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Projekte\DTC\Lotto\ionicApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__runden_uebersicht_runden_uebersicht__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__runden_uebersicht_runden_uebersicht__["a" /* RundenUebersichtComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__runden_uebersicht_runden_uebersicht__["a" /* RundenUebersichtComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RundenUebersichtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_lotto_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RundenUebersichtComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RundenUebersichtComponent = (function () {
    function RundenUebersichtComponent(lottoServiceProvider) {
        this.lottoServiceProvider = lottoServiceProvider;
        console.log('Hello RundenUebersichtComponent Component');
    }
    RundenUebersichtComponent.prototype.ngOnInit = function () {
        this.daten = this.lottoServiceProvider.daten;
        this.werteAnzeigen = false;
    };
    RundenUebersichtComponent.prototype.wertAnzeigenOnChange = function () {
    };
    RundenUebersichtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'runden-uebersicht',template:/*ion-inline-start:"C:\Projekte\DTC\Lotto\ionicApp\src\components\runden-uebersicht\runden-uebersicht.html"*/'<!-- Generated template for the RundenUebersichtComponent component         {{ runde.gezogeneZahlen }}\n -->\n\n<ion-list *ngIf="daten.runden.length!=0">\n    <ion-item>\n        <ion-label>Werte anzeigen</ion-label>\n        <ion-toggle [(ngModel)]="werteAnzeigen" (ionChange)="wertAnzeigenOnChange()"></ion-toggle>\n    </ion-item>\n    <ion-item *ngFor="let runde of daten.runden; index as i">\n      <h4>{{ i + 1 }}. Runde</h4>\n      <p>\n        <span *ngFor="let zahl of runde.zahlen; last as last">\n          <button (click)="werteAnzeigen = !werteAnzeigen" ion-button round>{{ zahl }}</button>\n          <ion-badge *ngIf="werteAnzeigen">{{ lottoServiceProvider.getWert(zahl) }}</ion-badge>\n        </span>\n      </p>\n      <p item-end>{{ runde.timestamp }}</p>\n    </ion-item>\n</ion-list>\n'/*ion-inline-end:"C:\Projekte\DTC\Lotto\ionicApp\src\components\runden-uebersicht\runden-uebersicht.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_lotto_service__["a" /* LottoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_lotto_service__["a" /* LottoServiceProvider */]) === "function" && _a || Object])
    ], RundenUebersichtComponent);
    return RundenUebersichtComponent;
    var _a;
}());

//# sourceMappingURL=runden-uebersicht.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LottoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_adminDto__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_spielmodus__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_zahlenMapping__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_runde__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the LottoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LottoServiceProvider = (function () {
    function LottoServiceProvider() {
        console.log('Hello LottoServiceProvider Provider');
        this.anzahlVersuche = 0;
        this.daten = new __WEBPACK_IMPORTED_MODULE_1__model_adminDto__["a" /* AdminDto */](new __WEBPACK_IMPORTED_MODULE_2__model_spielmodus__["a" /* Spielmodus */](2, 6), [
            new __WEBPACK_IMPORTED_MODULE_3__model_zahlenMapping__["a" /* ZahlenMapping */](1, "rot"),
            new __WEBPACK_IMPORTED_MODULE_3__model_zahlenMapping__["a" /* ZahlenMapping */](2, "blau"),
            new __WEBPACK_IMPORTED_MODULE_3__model_zahlenMapping__["a" /* ZahlenMapping */](3, "gelb"),
            new __WEBPACK_IMPORTED_MODULE_3__model_zahlenMapping__["a" /* ZahlenMapping */](4, "grün"),
            new __WEBPACK_IMPORTED_MODULE_3__model_zahlenMapping__["a" /* ZahlenMapping */](5, "magenta"),
            new __WEBPACK_IMPORTED_MODULE_3__model_zahlenMapping__["a" /* ZahlenMapping */](6, "grau"),
        ], []);
    }
    LottoServiceProvider.prototype.ChangeZahlenMenge = function (zahl) {
        var oldMapping = this.daten.zahlenMappings;
        var newMapping = [];
        for (var i = 0; i < zahl; i++) {
            newMapping.push(new __WEBPACK_IMPORTED_MODULE_3__model_zahlenMapping__["a" /* ZahlenMapping */](i + 1, i < oldMapping.length ? oldMapping[i].wert : ""));
        }
        this.daten.zahlenMappings = newMapping;
    };
    LottoServiceProvider.prototype.anzahlVersucheOderMax = function () {
        return this.versuchMoeglich() ? this.anzahlVersuche + 1 : this.daten.spielmodus.maxAnzahlVersuche;
    };
    LottoServiceProvider.prototype.versuchNotieren = function () {
        this.anzahlVersuche++;
        if (this.anzahlVersuche == 1) {
            this.zahlenVorrat = [];
            for (var i = 1; i <= this.daten.spielmodus.zahlenPool; i++) {
                this.zahlenVorrat.push(i);
            }
        }
        var zahlen = [];
        for (var i = 0; i < this.daten.spielmodus.anzahlZahlen; i++) {
            var index = Math.floor(Math.random() * this.zahlenVorrat.length);
            zahlen.push(this.zahlenVorrat[index]);
            this.zahlenVorrat.splice(index, 1);
        }
        var date = new Date();
        this.daten.runden.push(new __WEBPACK_IMPORTED_MODULE_4__model_runde__["a" /* Runde */](zahlen, this.formatDateZahl(date.getDate()) + "." + this.formatDateZahl(date.getMonth() + 1) + "." + date.getFullYear() + " " + this.formatDateZahl(date.getHours()) + ":" + this.formatDateZahl(date.getMinutes()) + ":" + this.formatDateZahl(date.getSeconds())));
    };
    LottoServiceProvider.prototype.getWert = function (zahl) {
        var wert = "unbekannt";
        this.daten.zahlenMappings.forEach(function (v) {
            if (v.zahl === zahl) {
                wert = v.wert;
            }
        });
        return wert;
    };
    LottoServiceProvider.prototype.rundenVersucheLoeschen = function () {
        this.anzahlVersuche = 0;
        this.daten.runden = [];
    };
    LottoServiceProvider.prototype.versuchMoeglich = function () {
        return this.anzahlVersuche < this.daten.spielmodus.maxAnzahlVersuche;
    };
    LottoServiceProvider.prototype.formatDateZahl = function (i) {
        return i < 10 ? "0" + i : "" + i;
    };
    LottoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LottoServiceProvider);
    return LottoServiceProvider;
}());

//# sourceMappingURL=lotto-service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map