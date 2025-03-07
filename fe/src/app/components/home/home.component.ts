import { ItemsService } from './../../services/items.service';
import { Component, inject } from '@angular/core';
import { Item } from '../../interfaces/item';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MatButtonModule, MatCardModule, ItemCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  itemList: Item[] = [];

  itemsService: ItemsService = inject(ItemsService);

  constructor() {
    this.itemList = this.itemsService.getAllItems();
  }

}
