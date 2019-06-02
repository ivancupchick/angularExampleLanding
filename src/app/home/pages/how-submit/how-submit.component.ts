import { Component, OnInit, Input } from '@angular/core';
import { SizeServiceService } from 'src/app/service/size-service.service';

@Component({
  selector: 'app-how-submit',
  templateUrl: './how-submit.component.html',
  styleUrls: ['./how-submit.component.css']
})
export class HowSubmitComponent implements OnInit {

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
