import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-how-submit',
  templateUrl: './how-submit.component.html',
  styleUrls: ['./how-submit.component.css']
})
export class HowSubmitComponent implements OnInit {

  @Input() minwidth: string;
  @Input() minheight: string;

  constructor() { }

  ngOnInit() {
  }

}
