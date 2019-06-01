import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-lising-difference',
  templateUrl: './credit-lising-difference.component.html',
  styleUrls: ['./credit-lising-difference.component.css']
})
export class CreditLisingDifferenceComponent implements OnInit {

  @Input() minwidth: string;
  @Input() minheight: string;

  constructor() { }

  ngOnInit() {
  }

}
