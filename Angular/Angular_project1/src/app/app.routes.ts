import { Routes } from '@angular/router';
import { CRUD } from './crud/crud';
import { User } from './user/user';

export const routes: Routes = [
  { path: '', redirectTo: 'crud', pathMatch: 'full' },
  { path: 'crud', component: CRUD },
  { path: 'user', component: User },
];
