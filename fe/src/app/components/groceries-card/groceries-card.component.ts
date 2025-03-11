import { Groceries } from './../../interfaces/groceries';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { GroceriesDetailsComponent } from '../groceries-details/groceries-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-groceries-card',
  imports: [RouterModule, MatButtonModule, MatCardModule, GroceriesDetailsComponent, CommonModule],
  templateUrl: './groceries-card.component.html',
  styleUrls: ['./groceries-card.component.scss']
})
export class GroceriesCardComponent {
  @Input() groceries!: Groceries;
}
