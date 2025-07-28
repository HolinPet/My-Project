import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { BasketDirective } from '../../directives/basket.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIcon, BasketDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly headerItem1 = 'Главная';
  readonly aboutCompany = 'О компании';
  readonly headerItem3 = 'Каталог';
}
