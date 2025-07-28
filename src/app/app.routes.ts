import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';
import { UsersListComponent } from './users/user-list/users-list.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'users',
        component: UsersListComponent,
      },
    ],
  },
];
