import { Groceries } from '../../interfaces/groceries';
import { ActivatedRoute } from '@angular/router';
import { GroceriesService } from '../../services/groceries.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-groceries-details',
  imports: [MatButtonModule, CommonModule, MatButtonModule, MatCardModule, ],
  templateUrl: './groceries-details.component.html',
  styleUrl: './groceries-details.component.scss'
})

export class GroceriesDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  groceriesService = inject(GroceriesService);
  groceries: Groceries | undefined;

  constructor() {
    const groceriesId = Number(this.route.snapshot.params['id']);
    if (!isNaN(groceriesId)) {
      this.groceriesService.getGroceriesById(groceriesId).then((groceries) => {
        this.groceries = groceries;
      });
    } else {
      console.error('Invalid ID parameter');
    }
  }

}

