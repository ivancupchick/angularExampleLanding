import { Component, OnInit } from '@angular/core';
import { SizeServiceService } from '../service/size-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  clientWidth = 0;

  constructor(private sizeService: SizeServiceService) { }

  ngOnInit() {
    this.sizeService.clientWidth.subscribe( (clientWidth) => {
      this.clientWidth = clientWidth;
    });
  }
}
