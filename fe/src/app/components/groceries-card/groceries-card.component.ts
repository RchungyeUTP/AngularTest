import { Groceries } from './../../interfaces/groceries';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-groceries-card',
  imports: [RouterModule, CommonModule, MaterialModule],
  templateUrl: './groceries-card.component.html',
  styleUrls: ['./groceries-card.component.scss']
})
export class GroceriesCardComponent {
  @Input() groceries!: Groceries;
}
