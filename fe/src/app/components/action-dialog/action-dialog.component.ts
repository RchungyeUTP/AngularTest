import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Groceries } from '../../interfaces/groceries';
import { GroceriesService } from '../../services/groceries.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-action-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss']
})
export class ActionDialogComponent {
  groceryForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Groceries,
    private fb: FormBuilder,
    private groceriesService: GroceriesService,
    private dialog: MatDialog // Asegúrate de que esté aquí
  ) {
    this.groceryForm = this.fb.group({
      id_groceries: [data?.id_groceries || null],
      name: [data?.name || '', Validators.required],
      price: [data?.price || '', Validators.required],
      description: [data?.description || ''],
      photo: [data?.photo || '']
    });
  }

  saveChanges() {
    if (this.groceryForm.valid) {
      const groceryData = this.groceryForm.value;
      if (groceryData.id_groceries) {
        // Editar Grocery
        this.groceriesService.editGroceries(groceryData).then(() => {
          this.dialogRef.close();
          window.location.reload();  // 🔄 Recarga la página de detalles
        });
      } else {
        // Guardar Nuevo Grocery
        this.groceriesService.saveGroceries(groceryData).then(() => {
          this.dialogRef.close();
          window.location.reload();  // 🔄 Recarga la página de detalles
        });
      }
    }
  }

  deleteGroceryDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { name: this.data.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groceriesService.deleteGroceries(this.data.id_groceries).then(() => {
          this.dialogRef.close();
          window.location.href = '/'; // 🔄 Redirige a la página principal
        });
      }
    });
  }

}
