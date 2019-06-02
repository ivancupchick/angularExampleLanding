import { Component, OnInit, Input } from '@angular/core';
import { SizeServiceService } from 'src/app/service/size-service.service';

@Component({
  selector: 'app-installment-plan',
  templateUrl: './installment-plan.component.html',
  styleUrls: ['./installment-plan.component.css']
})
export class InstallmentPlanComponent implements OnInit {

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
