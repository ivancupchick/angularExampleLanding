import { Component, OnInit, Input } from '@angular/core';
import { SizeServiceService } from 'src/app/service/size-service.service';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-credit-lising-difference',
  templateUrl: './credit-lising-difference.component.html',
  styleUrls: ['./credit-lising-difference.component.css']
})
export class CreditLisingDifferenceComponent implements OnInit {

  minwidth: number;
  minheight: number;

  secondScreenStyle: SafeStyle;

  constructor(private sizeService: SizeServiceService, private sanitizer: DomSanitizer) { }

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
    const secondScreenFirstLineSize = 540 + ((+this.minheight - 766) * 0.755);
    const secondScreenSecondLineSize = 1233 + ((+this.minheight - 766) * 1.509);
    this.secondScreenStyle = this.transform(
      `background:  linear-gradient(41deg, #00000000 ${secondScreenFirstLineSize}px, #ffcc0099 ${secondScreenFirstLineSize + 1}px,
       #ffcc0099 ${secondScreenSecondLineSize}px, #00000000 ${secondScreenSecondLineSize + 1}px), #666600ce`
      // url(../assets/images/service/secondScreen.jpg); background-size: cover;`
    );
  }

  public transform(style: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
