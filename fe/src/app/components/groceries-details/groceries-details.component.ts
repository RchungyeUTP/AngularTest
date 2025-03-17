import { Groceries } from '../../interfaces/groceries';
import { ActivatedRoute, Router } from '@angular/router';
import { GroceriesService } from '../../services/groceries.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { ActionDialogComponent } from '../action-dialog/action-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-groceries-details',
  imports: [CommonModule, MaterialModule],
  templateUrl: './groceries-details.component.html',
  styleUrl: './groceries-details.component.scss' 
})

export class GroceriesDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  groceriesService = inject(GroceriesService);
  groceries: Groceries | undefined;
  router = inject(Router);

  constructor(public dialog: MatDialog) {
    const groceriesId = Number(this.route.snapshot.params['id']);
    console.log('groceriesId:', groceriesId);
    if (!isNaN(groceriesId)) {
      this.groceriesService.getGroceriesById(groceriesId).then((groceries) => {
        this.groceries = groceries;
      });
    }
  }

  editGroceryDialog() {
    if (this.groceries) {
      this.dialog.open(ActionDialogComponent, {
        width: '400px',
        data: this.groceries
      }).afterClosed().subscribe(result => {
        if (result) {
          console.log('Grocery updated successfully');
        }
      });
    }
  }

  deleteGroceryDialog() {
    if (this.groceries) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: { name: this.groceries.name }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.groceriesService.deleteGroceries(this.groceries!.id_groceries).then(() => {
            console.log('Grocery deleted successfully');
            this.router.navigate(['/']);  // 🔄 Redirige a la página principal
          }).catch(error => {
            console.error('Error deleting grocery:', error);
          });
        }
      });
    }
  }
  

}

