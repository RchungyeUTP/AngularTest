import { Users } from './../interfaces/users';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  itemList: Users[] = [
    {
      id_users: 1,
      username: 'wah',
      password: '12345678'
    }
  ];

  // getAllUsers(): Users[] {
  //   return this.usersList;
  // }

  // async getAllUsersById(id: number): Promise<Users | undefined> {
  //   return this.usersList.find((users) => users.id_users === id);
  // }

  submitLogin(username:string, password: string){
    console.log(`UserName: ${username} - Password: ${password}`);
  }

}
