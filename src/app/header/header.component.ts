import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { SizeServiceService } from '../service/size-service.service';
import { MediaMatcher } from '@angular/cdk/layout';

export const routes: any[] = [
  {title: 'Калькулятор кредита и лизинга', path: 'credit-calculator' },
  {title: 'Калькулятор рассрочки', path: 'installment-calculator' }
];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  routes = routes;

  clientWidth = 0;

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(private sizeService: SizeServiceService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
    this.sizeService.clientWidth.subscribe( (clientWidth) => {
      this.clientWidth = clientWidth;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
