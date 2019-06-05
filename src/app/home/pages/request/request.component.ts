import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CalculatorToRequestService } from '../../services/calculator-to-request.service';
import { SizeServiceService } from 'src/app/service/size-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @Output() scroll: EventEmitter<boolean> = new EventEmitter<boolean>();

  name: string;
  phone: string;

  // not need code
  project_name: string;
  admin_email: string;
  form_subject: string;
  // end not need code

  minwidth: number;
  minheight: number;


  price: number;
  firstPayment: string;
  period: string;
  rate: number;
  plt: number;
  creditLisingValue: number;

  thirdScreenStyle: SafeStyle;

  constructor(private calculatorService: CalculatorToRequestService,
              protected sanitizer: DomSanitizer,
              private http: HttpClient,
              private sizeService: SizeServiceService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.sizeService.clientWidth.subscribe( (clientWidth) => {
      this.minwidth = clientWidth;
    });
    this.sizeService.clientHeight.subscribe( (clientHeight) => {
      this.minheight = clientHeight;
    });
    this.calculatorService.price.subscribe( (price) => {
      this.price = price;
    });
    this.calculatorService.firstPayment.subscribe( (firstPayment) => {
      this.firstPayment = firstPayment;
    });
    this.calculatorService.period.subscribe( (period) => {
      this.period = period;
    });
    this.calculatorService.rate.subscribe( (rate) => {
      this.rate = rate;
    });
    this.calculatorService.plt.subscribe( (plt) => {
      this.plt = plt;
    });
    this.calculatorService.creditOrLising.subscribe( (creditLisingValue) => {
      this.creditLisingValue = creditLisingValue;
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
       #ffcc0099 ${thirdScreenLineSize + 1}px), url(../../../../assets/images/service/thirdScreen.jpg); background-size: cover;`
    );
  }

  public transform(style: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  submitForm(data: any) {
    const price = `${this.price}`;
    const percentage = `${this.firstPayment}`;
    const period = `${this.period}`;
    const percentageStavka = `${(this.rate * 100).toFixed(2)} %`;
    const mountyPayment = `${this.plt.toFixed(2)} BYN`;
    const lisingOrCredit = this.creditLisingValue === 0 ? 'Кредит' : 'Лизинг';

    // console.log(data.value);
    // console.log({
    //   name: data.value.name,
    //   phone: data.value.phone,
    //   price,
    //   percentage,
    //   period,
    //   percentageStavka,
    //   mountyPayment,
    //   lisingOrCredit,
    // });
    this.http.post('../../../../assets/mail.php', {
      name: data.value.name,
      phone: data.value.phone,
      price,
      percentage,
      period,
      percentageStavka,
      mountyPayment,
      lisingOrCredit,
    }).subscribe( (data: any) => {
        console.log(data);
      }, (error) => console.log(error)
    );

    this.name = '';
    this.phone = '';
    this.openSnackBar('Спасибо! Ваша заявка отправлена!', 'OK');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: 'test'
    });
  }

  public scrollToCLdiffernce() {
    this.scroll.emit(true);
  }
}
