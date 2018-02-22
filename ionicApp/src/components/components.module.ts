import { NgModule } from '@angular/core';
import { RundenUebersichtComponent } from './runden-uebersicht/runden-uebersicht';

import {  IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [RundenUebersichtComponent],
	imports: [IonicModule],
	exports: [RundenUebersichtComponent]
})
export class ComponentsModule {}
