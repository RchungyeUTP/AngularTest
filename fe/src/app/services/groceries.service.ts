import { Injectable } from '@angular/core';
import { Groceries } from '../interfaces/groceries';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  constructor() { }

  async getAllGroceries(): Promise<Groceries[]> {
    const data = await fetch(`${environment.BE_API_URL}/groceries/all`);
    return (await data.json());
  }

  async getGroceriesById(id: number): Promise<Groceries | undefined> {
    const data = await fetch(`${environment.BE_API_URL}/groceries/${id}`);
    return (await data.json()) ?? {};
  }

  // Editar un grocery
  async editGroceries(grocery: Groceries): Promise<Groceries> {
    const response = await fetch(`${environment.BE_API_URL}/groceries/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(grocery)
    });
    return await response.json();
  }

  // Eliminar un grocery por ID
  async deleteGroceries(id: number): Promise<{ message: string }> {
    const response = await fetch(`${environment.BE_API_URL}/groceries/delete/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  }

}
