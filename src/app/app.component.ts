import { Component, ChangeDetectorRef } from '@angular/core';
import { SizeServiceService } from './service/size-service.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Кредит / Лизинг на покупку автомобиля';

  clientWidth = 0;
  clientHeight = 0;

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(private sizeService: SizeServiceService,
    changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
                this.mobileQuery = media.matchMedia('(max-width: 600px)');
                this.mobileQueryListener = () => changeDetectorRef.detectChanges();
                this.mobileQuery.addListener(this.mobileQueryListener);

    this.sizeService.clientWidth.next(document.documentElement.clientWidth);
    this.sizeService.clientHeight.next(document.documentElement.clientHeight);
    window.addEventListener('resize', () => {
      this.sizeService.clientWidth.next(document.documentElement.clientWidth);
      this.sizeService.clientHeight.next(document.documentElement.clientHeight);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
