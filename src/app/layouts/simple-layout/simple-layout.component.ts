import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../website/footer/footer.component';
import { HeaderComponent } from '../../website/header/header.component';

@Component({
  selector: 'app-simple-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './simple-layout.component.html',
  styleUrl: './simple-layout.component.scss',
})
export class SimpleLayoutComponent {}
