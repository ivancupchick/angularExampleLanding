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


  // need to modify
  // scrollToSecondPage() {
  //   window.scrollTo({ left: 0, top: this.clientHeight, behavior: 'smooth'});
  // }
  // scrollToThirdPage() {
  //   window.scrollTo({ left: 0, top: (this.clientHeight * 3), behavior: 'smooth'});
  // }
}
