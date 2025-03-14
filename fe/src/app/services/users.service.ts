import { Users } from './../interfaces/users';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  async getAllUsers(): Promise<Users[]> {
    const data = await fetch(`${environment.BE_API_URL}/users/all`);
    return await data.json();
  }

  async getUserById(id_user: number): Promise<Users | undefined> {
    const data = await fetch(`${environment.BE_API_URL}/users/${id_user}`);
    return (await data.json()) ?? {};
  }

  async loginUser(user: { username: string; password: string }): Promise<any> {
    const response = await fetch(`${environment.BE_API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  }

  async saveUser(user: Users): Promise<Users> {
    const response = await fetch(`${environment.BE_API_URL}/users/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  }

  async editUser(user: Users): Promise<Users> {
    const response = await fetch(`${environment.BE_API_URL}/users/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  }

  async deleteUser(id_user: number): Promise<{ message: string }> {
    const response = await fetch(`${environment.BE_API_URL}/users/delete/${id_user}`, {
      method: 'DELETE'
    });
    return await response.json();
  }

}
