import { NgModule } from '@angular/core';

// Import der benötigten Material Komponenten
import {
  MatButtonModule,
  MatTabsModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule, MatTableModule, MatSnackBarModule, MatButtonToggleModule, MatListModule, MatGridListModule, MatCheckboxModule,
  MatSlideToggleModule, MatDividerModule, MatChipsModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
            MatTabsModule,
            MatCardModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatTableModule,
            MatSnackBarModule,
    MatButtonToggleModule,   MatListModule,
MatGridListModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatChipsModule,
            ],

  exports: [MatButtonModule,
            MatTabsModule,
            MatCardModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatTableModule,
            MatSnackBarModule,
    MatButtonToggleModule,
    MatListModule,
MatGridListModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatChipsModule
            ],
})
export class MaterialModul {}
