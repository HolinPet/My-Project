import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, take } from 'rxjs';
import { IUser } from '../../Interfaces/user.interface';
import { UsersApiService } from '../../servises/users-api.servise';
import { UsersService } from '../../servises/users.service';
import { UserAddButtonComponent } from '../user-add-button/user-add-button.component';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MatDialogModule,
    UserAddButtonComponent,
    NgFor,
    AsyncPipe,
    UserCardComponent,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiservice = inject(UsersApiService);
  readonly usersService = inject(UsersService);
  private readonly snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);

  constructor() {
    this.usersApiservice.getUsers().subscribe((response: IUser[]) => {
      this.usersService.setUsers(response);
    });
  }

  public deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  public createUser(user: IUser) {
    this.usersService.users$
      .pipe(
        take(1),
        map((users) =>
          users.find((existingUser) => existingUser.email === user.email)
        )
      )
      .subscribe((existingUser) => {
        if (existingUser !== undefined) {
          this.snackBar.open('Такой Email уже существует', 'ok', {
            duration: 3000,
          });
        } else {
          this.usersService.createUser({
            id: new Date().getTime(),
            name: user.name,
            email: user.email,
            website: user.website,
            company: {
              name: user.company.name,
            },
            phone: user.phone,
          });
          this.snackBar.open('Новый пользователь создан', 'ok', {
            duration: 3000,
          });
        }
      });
  }

  public editUser(formDialogValue: IUser) {
    this.usersService.editUser(formDialogValue);
  }
}
