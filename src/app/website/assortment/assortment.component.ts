import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

const newPages = [1, 2, 3, 4, 5];

@Component({
  selector: 'app-assortment',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './assortment.component.html',
  styleUrl: './assortment.component.scss',
})
export class AssortmentComponent {
  newPages = newPages;

  isPhotoVisible = true;

  toggleImage() {
    this.isPhotoVisible = !this.isPhotoVisible;
  }
}
