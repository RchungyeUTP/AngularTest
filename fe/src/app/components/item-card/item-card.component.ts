import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Item } from '../../interfaces/item';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-item-card',
  imports: [RouterModule, MatButtonModule, MatCardModule, ItemDetailsComponent],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item!: Item;
}
