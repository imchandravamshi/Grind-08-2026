import { Component, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { Crud } from '../crud';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-crud',
  styleUrl: './crud.scss',
  templateUrl: './crud.html',
})
export class CRUD implements OnInit {
  apiData: Iuser[] = [];

  constructor(private crud: Crud) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.crud.getData().subscribe((res) => (this.apiData = res));
  }
}
