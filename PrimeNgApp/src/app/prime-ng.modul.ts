import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {TabMenuModule} from 'primeng/tabmenu';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
    imports: [AccordionModule, TabMenuModule, DropdownModule],
    exports: [AccordionModule, TabMenuModule, DropdownModule],
})
export class PrimeNgModul {}
