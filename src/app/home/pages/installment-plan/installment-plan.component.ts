import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-installment-plan',
  templateUrl: './installment-plan.component.html',
  styleUrls: ['./installment-plan.component.css']
})
export class InstallmentPlanComponent implements OnInit {

  @Input() minwidth: string;
  @Input() minheight: string;

  constructor() { }

  ngOnInit() {
  }

}
