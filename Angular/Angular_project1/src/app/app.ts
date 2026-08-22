import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { NgModel } from '@angular/forms';
import { CRUD } from './crud/crud';

@Component({
  imports: [RouterOutlet, User, CRUD],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular_project1');
}
