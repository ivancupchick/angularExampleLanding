import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Кредит / Лизинг на покупку автомобиля';

  clientWidth = 0;
  clientHeight = 0;

  constructor() {
    this.clientWidth = document.documentElement.clientWidth;
    this.clientHeight = document.documentElement.clientHeight;
    window.addEventListener('resize', () => {
      this.clientWidth = document.documentElement.clientWidth;
      this.clientHeight = document.documentElement.clientHeight;
    });
  }


  // need to modify
  scrollToSecondPage() {
    window.scrollTo({ left: 0, top: this.clientHeight, behavior: 'smooth'});
  }
  scrollToThirdPage() {
    window.scrollTo({ left: 0, top: (this.clientHeight * 3), behavior: 'smooth'});
  }
}
