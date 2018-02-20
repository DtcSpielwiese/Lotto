import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule , MatCardModule],
})
export class MaterialModul {}
