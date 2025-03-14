import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GroceriesDetailsComponent } from './components/groceries-details/groceries-details.component';

export const routes: Routes = [
    {path:'', component:HomeComponent, title:'Home Page'},
    {path:'groceriesDetails/:id', component:GroceriesDetailsComponent, title:'GroceriesDetails'},
    {path:'login', component:LoginComponent, title:'Login'},
];
