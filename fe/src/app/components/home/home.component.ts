import { Groceries } from './../../interfaces/groceries';
import { GroceriesService } from '../../services/groceries.service';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroceriesCardComponent } from '../groceries-card/groceries-card.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-home',
  imports: [RouterModule, GroceriesCardComponent, CommonModule, MaterialModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  groceriesList: Groceries[] = [];

  groceriesService: GroceriesService = inject(GroceriesService);

  constructor() {
    // this.groceriesList = this.groceriesService.getAllGroceries();
    this.groceriesService.getAllGroceries().then((groceriesList: Groceries[]) =>{
      this.groceriesList = groceriesList;
    })
  }

}
