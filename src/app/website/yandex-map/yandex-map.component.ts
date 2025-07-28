import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-yandex-map',
  standalone: true,
  imports: [],
  templateUrl: './yandex-map.component.html',
  styleUrl: './yandex-map.component.scss'
})
export class YandexMapComponent implements OnInit, OnDestroy {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef<HTMLDivElement>;

  private ymaps: any;
  private map: any;
  private placemarks: any[] = [];

  async ngOnInit() {
    await this.loadYandexMaps();

    this.ymaps = (window as any).ymaps;

    this.map = new this.ymaps.Map(this.mapContainer.nativeElement, {
      center: [55.76, 37.64], // Москва
      zoom: 10
    });

    // Пример: поставить несколько меток
    this.addPlacemark([55.76, 37.64], 'Центр Москвы');
    this.addPlacemark([55.75, 37.61], 'Еще одна точка');
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.destroy();
    }
  }

  private addPlacemark(coords: number[], hintContent: string) {
    const placemark = new this.ymaps.Placemark(coords, {
      hintContent: hintContent
    }, {
      preset: 'islands#redDotIcon'
    });
    this.map.geoObjects.add(placemark);
    this.placemarks.push(placemark);
  }

  private loadYandexMaps(): Promise<void> {
    return new Promise((resolve) => {
      if ((window as any).ymaps) {
        resolve();
      } else {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.onload = () => resolve();
        document.head.appendChild(script);
      }
    });
  }
}
