import { Component, OnInit, Input } from '@angular/core';
import { SizeServiceService } from '../service/size-service.service';
import { CallComponent } from './call/call.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';

export const routes: any[] = [
  {title: 'Калькулятор кредита и лизинга', path: 'credit-calculator' },
  {title: 'Калькулятор рассрочки', path: 'installment-calculator' }
];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes = routes;

  clientWidth = 0;

  @Input() snav: MatSidenav;

  constructor(private sizeService: SizeServiceService,
              private dialog: MatDialog
              ) {}

  ngOnInit() {
    this.sizeService.clientWidth.subscribe( (clientWidth) => {
      this.clientWidth = clientWidth;
    });
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
