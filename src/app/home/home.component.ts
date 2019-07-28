import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('ancorRequest', { static: true }) ancorRequest: ElementRef;
  @ViewChild('ancorC_Ldifference', { static: true }) ancorCLdifference: ElementRef;

  showFirstPage = false;
  showCreLisDiff = false;
  showIntPlab = false;
  showHowSub = false;
  showReq = false;

  constructor() {
  }

  ngOnInit() {
  }

  public scrollToRequest(e: any) {
    this.ancorRequest.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
  public scrollToLisingDifference(e: any) {
    this.ancorCLdifference.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
}
