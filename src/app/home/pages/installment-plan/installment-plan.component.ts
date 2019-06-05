import { Component, OnInit, Input } from '@angular/core';
import { SizeServiceService } from 'src/app/service/size-service.service';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-installment-plan',
  templateUrl: './installment-plan.component.html',
  styleUrls: ['./installment-plan.component.css']
})
export class InstallmentPlanComponent implements OnInit {

  minwidth: number;
  minheight: number;

  thirdScreenStyle: SafeStyle;

  constructor(private sizeService: SizeServiceService, protected sanitizer: DomSanitizer) { }

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

    const thirdScreenLineSize = 1118 + ((height - 766) * 1.509);
    this.thirdScreenStyle = this.transform(
      `background: linear-gradient(41deg, #3333334d 30%, #3333334d 30%, #3333334d ${thirdScreenLineSize}px,
       #ffcc0099 ${thirdScreenLineSize + 1}px), url(../../../../assets/images/service/secondScreen.png);
       background-size: cover;`
    );
  }

  public transform(style: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
