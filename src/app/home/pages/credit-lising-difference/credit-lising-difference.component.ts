import { Component, OnInit, Input } from '@angular/core';
import { SizeServiceService } from 'src/app/service/size-service.service';

@Component({
  selector: 'app-credit-lising-difference',
  templateUrl: './credit-lising-difference.component.html',
  styleUrls: ['./credit-lising-difference.component.css']
})
export class CreditLisingDifferenceComponent implements OnInit {

  minwidth: number;
  minheight: number;

  constructor(private sizeService: SizeServiceService) { }

  ngOnInit() {
    this.sizeService.clientWidth.subscribe( (clientWidth) => {
      this.minwidth = clientWidth;
    });
    this.sizeService.clientHeight.subscribe( (clientHeight) => {
      this.minheight = clientHeight;
    });
  }

}
