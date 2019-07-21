import { Component } from '@angular/core';
import { SizeServiceService } from './service/size-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Кредит / Лизинг на покупку автомобиля';

  clientWidth = 0;
  clientHeight = 0;

  constructor(private sizeService: SizeServiceService) {
    this.sizeService.clientWidth.next(document.documentElement.clientWidth);
    this.sizeService.clientHeight.next(document.documentElement.clientHeight);
    window.addEventListener('resize', () => {
      this.sizeService.clientWidth.next(document.documentElement.clientWidth);
      this.sizeService.clientHeight.next(document.documentElement.clientHeight);
    });
  }
}
