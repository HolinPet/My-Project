import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from '../../Interfaces/user.interface';
import { PhonePipe } from '../../pipes/phone.pipe';
import { CustomUpperCasePipe } from '../../pipes/upper-case.pipe';
import { DeleteUserDialogComponent } from '../user-dialog/delete-user-dialog/delete-user-dialog.component';
import { EditUserDialogComponent } from '../user-dialog/edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    CustomUpperCasePipe,
    PhonePipe,
    MatChipsModule,
    MatIcon,
    MatMenuModule,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input()
  public user!: IUser;

  @Output()
  public deleteUser = new EventEmitter<IUser>();

  @Output()
  public editUser = new EventEmitter<IUser>();

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  public openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '600px',
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteUser.emit(this.user);
        this.snackBar.open('Пользователь удален', 'ok', {
          duration: 3000,
        });
      } else
        this.snackBar.open('Отмена удаления', 'ok', {
          duration: 3000,
        });
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editResult: IUser) => {
      if (editResult) {
        this.editUser.emit(editResult);
        this.snackBar.open('Пользователь изменен', 'ok', {
          duration: 3000,
        });
      } else {
        this.snackBar.open('Отмена редактирования', 'ok', {
          duration: 3000,
        });
      }
    });
  }

  onDeleteUser(userId: IUser) {
    this.deleteUser.emit(userId);
  }

  openMenu(trigger: any) {
    trigger.openMenu();
  }
}
