import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { SizeServiceService } from '../service/size-service.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { CallComponent } from './call/call.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private sizeService: SizeServiceService,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private dialog: MatDialog) {
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

  openModal() {
    const dialogRef = this.dialog.open(CallComponent, {
      height: '300px',
      width: '600px',

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
