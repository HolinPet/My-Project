import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './website/header/header.component';
import { AssortmentComponent } from './website/assortment/assortment.component';
import { PopularProductComponent } from './website/popular-product/popular-product.component';
import { FooterComponent } from './website/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AssortmentComponent,
    PopularProductComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-project';
}
