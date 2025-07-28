import { Component } from '@angular/core';
import { AssortmentComponent } from '../../website/assortment/assortment.component';
import { FooterComponent } from '../../website/footer/footer.component';
import { HeaderComponent } from '../../website/header/header.component';
import { PopularProductComponent } from '../../website/popular-product/popular-product.component';
import { YandexMapComponent } from "../../website/yandex-map/yandex-map.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AssortmentComponent,
    PopularProductComponent,
    YandexMapComponent
],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
