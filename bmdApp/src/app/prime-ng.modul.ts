import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {TabMenuModule} from 'primeng/tabmenu';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from "primeng/button";
import {GMapModule} from "primeng/gmap";

@NgModule({
    imports: [AccordionModule, TabMenuModule, DropdownModule, ButtonModule, GMapModule],
    exports: [AccordionModule, TabMenuModule, DropdownModule, ButtonModule, GMapModule],
})
export class PrimeNgModul {}
