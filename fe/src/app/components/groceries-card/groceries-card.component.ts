import { Groceries } from './../../interfaces/groceries';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroceriesDetailsComponent } from '../groceries-details/groceries-details.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-groceries-card',
  imports: [RouterModule, GroceriesDetailsComponent, CommonModule, MaterialModule],
  templateUrl: './groceries-card.component.html',
  styleUrls: ['./groceries-card.component.scss']
})
export class GroceriesCardComponent {
  @Input() groceries!: Groceries;
}
