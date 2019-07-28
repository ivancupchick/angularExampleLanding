import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { CalculatorToRequestService } from 'app/home/services/calculator-to-request.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

  name: string;
  phone: string;

  price: number;
  firstPayment: string;
  period: string;
  rate: number;
  plt: number;
  creditLisingValue: number;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<CallComponent>,
              private calculatorService: CalculatorToRequestService) { }

  ngOnInit() {
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
  }

  submitForm(data: any) {
    const price = `${this.price}`;
    const percentage = `${this.firstPayment}`;
    const period = `${this.period}`;
    const percentageStavka = `${(this.rate * 100).toFixed(2)} %`;
    const mountyPayment = `${this.plt.toFixed(2)} BYN`;
    const lisingOrCredit = this.creditLisingValue === 0 ? 'Кредит' : 'Лизинг';

    console.log(data.value);
    console.log({
      name: data.value.name,
      phone: data.value.phone,
      price,
      percentage,
      period,
      percentageStavka,
      mountyPayment,
      lisingOrCredit,
    });
    // this.http.post('../../../../assets/mail.php', {
    //   name: data.value.name,
    //   phone: data.value.phone,
    //   price,
    //   percentage,
    //   period,
    //   percentageStavka,
    //   mountyPayment,
    //   lisingOrCredit,
    // }).subscribe( (data: any) => {
    //     console.log(data);
    //   }, (error) => console.log(error)
    // );

    this.name = '';
    this.phone = '';
    this.dialogRef.close();
    this.openSnackBar('Спасибо! Ваша заявка отправлена!', 'OK');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: 'test'
    });
  }

}
