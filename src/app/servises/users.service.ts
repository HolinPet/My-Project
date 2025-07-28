import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../Interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private usersSubjects$ = new BehaviorSubject<IUser[]>([]);
  users$ = this.usersSubjects$.asObservable();

  setUsers(users: IUser[]) {
    this.usersSubjects$.next(users);
  }

  editUser(editedUser: IUser) {
    this.usersSubjects$.next(
      this.usersSubjects$.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else {
          return user;
        }
      })
    );
  }

  createUser(user: IUser) {
    this.usersSubjects$.next([...this.usersSubjects$.value, user]);
  }

  deleteUser(id: number) {
    this.usersSubjects$.next(
      this.usersSubjects$.value.filter((item) => item.id !== id)
    );
  }
}
