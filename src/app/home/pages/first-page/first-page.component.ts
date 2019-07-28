import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { RequestComponent } from '../request/request.component';
import { Options } from 'selenium-webdriver/opera';
import { SizeServiceService } from 'app/service/size-service.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  @Output() scroll: EventEmitter<boolean> = new EventEmitter<boolean>();

  minwidth: number;
  minheight: number;

  firstScreenFirstHalfStyle: SafeStyle;
  firstScreenSecondHalfStyle: SafeStyle;

  constructor(protected sanitizer: DomSanitizer, private sizeService: SizeServiceService) { }

  ngOnInit() {
    this.sizeService.clientWidth.subscribe( (clientWidth) => {
      this.minwidth = clientWidth;
    });
    this.sizeService.clientHeight.subscribe( (clientHeight) => {
      this.minheight = clientHeight;
    });

    this.setLineSizes();
    window.addEventListener('resize', () => {
      this.setLineSizes();
    });
  }

  private setLineSizes() {
    const height = +this.minheight;

    const firstScreenFirstHalfLineSize = 424 + (((height * 0.60) - (766 * 0.60)) * 0.755);
    this.firstScreenFirstHalfStyle = this.transform(
      `background: linear-gradient(41deg, #666600ce ${firstScreenFirstHalfLineSize}px, #ff000001
      ${firstScreenFirstHalfLineSize + 1}px, #ff000001 80%, #ff000001 80%)`
    );
    const firstScreenSecondHalfLineSize = 655 + (((height * 0.40) - (766 * 0.40)) * 1.885);
    this.firstScreenSecondHalfStyle = this.transform(
      `background:  linear-gradient(41deg, #ffcc00b9 ${firstScreenSecondHalfLineSize}px, #333333a6
       ${firstScreenSecondHalfLineSize + 1}px, #333333a6 1%, #333333a6 1%)` // ffcc00d4
    );
  }

  public transform(style: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  public scrollToRequest() {
    this.scroll.emit(true);
  }
}
