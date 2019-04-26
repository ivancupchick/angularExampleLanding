import { Component, OnInit } from '@angular/core';
import { RequestComponent } from '../request/request.component';
import { MatDialog } from '@angular/material/dialog';
import { Options } from 'ng5-slider';

export interface Mark {
  value: string;
  viewValue: string;
  price: string;
}
export interface Model {
  value: string;
  viewValue: string;
  price: string;
}
export interface Comp {
  value: string;
  viewValue: string;
  price: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  selectedMark: string;
  selectedModel: string;
  selectedNew: string;
  selectedComp: string;
  price = 0;
  oldText = ' ';

  value = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 5,
    showTicks: true,
    getLegend: (value: number): string => {
      if (value % 10 === 0) {
        return value + '%';
      }
    },
  };

  marks: Mark[] = [
    {value: 'Wolkswagen', viewValue: 'Волксваген', price: ' от 12000 BYR'},
    {value: 'Audi', viewValue: 'Ауди', price: ' от 12000 BYR'},
    {value: 'Marsedes', viewValue: 'Марседес', price: ' от 12000 BYR'}
  ];

  audiModels: Model[] = [
    {value: 'model1', viewValue: 'Волксsesfrваген', price: ' от 12000 BYR'},
  ];

  audiModel1Comps: Comp[] = [
    {value: 'comp1', viewValue: 'defrfddrfgd', price: ' от 12000 BYR'},
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  calculate(): any {
    setTimeout(() => {
      const price = Number(this.selectedComp.replace(/\D+/g,""));
      this.price = price;
    }, 100);
    /*
    if (text == undefined) {
      setTimeout(this.calculate(this.selectedComp), 100);
    } else if (text != this.oldText) {
      this.oldText = text;
      const price = Number(text.replace(/\D+/g,""));
      this.price = price;
    } else {
      setTimeout(this.calculate(this.selectedComp), 100);
    }*/
  }

  openModal() {
    const dialogRef = this.dialog.open(RequestComponent, {
      height: '300px',
      width: '600px',
      data: { sum: 12000 },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

}
