import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

export const routes: Routes = [
    {path:'', component:HomeComponent, title:'Home Page'},
    {path:'itemDetails/:id', component:ItemDetailsComponent, title:'ItemDetails'},
    {path:'login', component:LoginComponent, title:'Login'},
];
