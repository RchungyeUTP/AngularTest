import { Item } from './../../interfaces/item';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-item-details',
  imports: [MatButtonModule, CommonModule, MatButtonModule, MatCardModule,],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})

export class ItemDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  itemsService = inject(ItemsService);
  item: Item | undefined;

  constructor() {
    const itemId = Number(this.route.snapshot.params['id']);
    this.itemsService.getAllItemsById(itemId).then((item) => {
      this.item = item;
    });
  }

}

