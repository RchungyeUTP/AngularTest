import { NgModule } from '@angular/core';
import { MatButtonModule, } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ActionDialogComponent } from '../components/action-dialog/action-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';


const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  ActionDialogComponent,
  MatFormFieldModule,
  MatInputModule,
  ConfirmDialogComponent,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
