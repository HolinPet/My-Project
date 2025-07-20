import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

const newPages = [1, 2, 3, 4, 5];

@Component({
  selector: 'app-assortment',
  standalone: true,
  imports: [NgFor],
  templateUrl: './assortment.component.html',
  styleUrl: './assortment.component.scss',
})
export class AssortmentComponent {
  newPages = newPages;
}
