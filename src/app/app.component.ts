import { Component } from '@angular/core';
import { RequestComponent } from './request/request.component';
import { MatDialog } from '@angular/material/dialog';
import { Options, CustomStepDefinition, LabelType } from 'ng5-slider';

export class Mark {
  constructor(public name: string, public minPrice: number, public models: Model[]) { }
}
export class Model {
  constructor(public name: string, public minPrice: number, public photo: string, public comps: Comp[]) { }
}
export class Comp {
  constructor(public name: string, public price: number) { }
}

export class Percentages {
  public 0: number;
  public 10: number;
  public 20: number;
  public 30: number;
  public 40: number;
  public 50: number;
  public 60: number;
  public 70: number;
  constructor(one: number, two: number, three: number, four: number, five: number, six: number, seven: number, eight: number) {
    this[0] = one;
    this[10] = two;
    this[20] = three;
    this[30] = four;
    this[40] = five;
    this[50] = six;
    this[60] = seven;
    this[70] = eight;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projTest';

  clientWidth = 100;
  clientHeight = 100;

  selectedFace = 'F';
  selectedNew = 'new';

  CreditOrLisingOutput: string[] = ['Кредит', 'Лизинг'];
  creditLisingValue = this.wordToIndex('Кредит', this.CreditOrLisingOutput);
  creditLisingOptions: Options = {
    stepsArray: this.CreditOrLisingOutput.map((word: string): CustomStepDefinition => {
      return { value: this.wordToIndex(word, this.CreditOrLisingOutput) };
    }),
    translate: (value: number, label: LabelType): string => {
      return this.indexToWord(value, this.CreditOrLisingOutput);
    },
    showTicks: true,
    showSelectionBar: true,
    hidePointerLabels: true,
  };

  BYRorUSDOutput: string[] = ['BYR', 'USD'];
  BYRorUSDvalue = this.wordToIndex('BYR', this.BYRorUSDOutput);
  BYRorUSDoptions: Options = {
    stepsArray: this.BYRorUSDOutput.map((word: string): CustomStepDefinition => {
      return { value: this.wordToIndex(word, this.BYRorUSDOutput) };
    }),
    translate: (value: number, label: LabelType): string => {
      return this.indexToWord(value, this.BYRorUSDOutput);
    },
    showTicks: true,
    showSelectionBar: true,
    hidePointerLabels: true,
  };

  firstPaymentPercentageValue = 15;
  firstPaymentPercentageOptions: Options = {
    floor: 0,
    ceil: 90,
    step: 5,
    showTicks: true,
    hideLimitLabels: true,
    hidePointerLabels: true,
    getTickColor: (value: number): string => {
      return 'rgba(255, 255, 255, 0)';
    },
    getLegend: (value: number): string => {
      if (value % 10 === 0) {
        return value + '%';
      }
    },
  };

  repaymentPeriodValue = 12;
  repaymentPeriodOptions: Options = {
    floor: 6,
    ceil: 120,
    step: 6,
    showTicks: true,
    hideLimitLabels: true,
    hidePointerLabels: true,
    getTickColor: (value: number): string => {
      return 'rgba(255, 255, 255, 0)';
    },
    getLegend: (value: number): string => {
      if (value % 12 === 0) {
        return value + ' мес';
      }
    },
  };

  lisingFirstPaymentPercentageValue = 15;
  lisingFirstPaymentPercentageOptions: Options = {
    floor: 10,
    ceil: 90,
    step: 5,
    showTicks: true,
    hideLimitLabels: true,
    hidePointerLabels: true,
    getTickColor: (value: number): string => {
      return 'rgba(255, 255, 255, 0)';
    },
    getLegend: (value: number): string => {
      if (value % 10 === 0) {
        return value + '%';
      }
    },
  };

  lisingRepaymentPeriodValue = 12;
  lisingRepaymentPeriodOptions: Options = {
    floor: 6,
    ceil: 60,
    step: 6,
    showTicks: true,
    hideLimitLabels: true,
    hidePointerLabels: true,
    getTickColor: (value: number): string => {
      return 'rgba(255, 255, 255, 0)';
    },
    getLegend: (value: number): string => {
      if (value % 12 === 0) {
        return value + ' мес';
      }
    },
  };

  oldText = ' ';

  percentagesForUFNewCredit = {
    1: new Percentages(10.5, 9.5, 9.0, 7.0, 5.5, 3.0, 0.01, 0.01),
    2: new Percentages(13.5, 12.5, 11.9, 10.99, 9.99, 8.5, 5.99, 2.5),
    3: new Percentages(14.5, 13.5, 13.2, 12.5, 11.5, 10.5, 8.5, 5.5),
    5: new Percentages(14.99, 14.5, 14.2, 13.7, 13.0, 11.99, 10.7, 8.5),
    7: new Percentages(0, 14.99, 14.6, 14.2, 13.7, 12.9, 11.8, 9.7),
    10: new Percentages(0, 14.99, 14.6, 14.2, 13.7, 12.9, 11.8, 9.7)
  };

  percentagesForUFNewLising = {
    1: new Percentages(null, 5.9, 1.9, 0.01, 0.01, 0.01, 0.01, 0.01),
    2: new Percentages(null, 8.9, 2.9, 1.9, 0.01, 0.01, 0.01, 0.01),
    3: new Percentages(null, 9.9, 3.9, 2.9, 1.9, 0.01, 0.01, 0.01),
    4: new Percentages(null, 10.5, 4.9, 3.9, 2.9, 1.9, 0.01, 0.01),
    5: new Percentages(null, 10.9, 5.9, 4.9, 3.9, 2.9, 1.9, 0.01),
  };
  allMarks: Mark[] = [
    new Mark('Geely', null, [
      new Model('Atlas', null, './../assets/images/Geely Atlas.png', [
        new Comp('Base', 35200),
        new Comp('Comfort', 39700),
        new Comp('Luxury', 45100),
        new Comp('Luxury (LED)', 49600),
      ]),
      new Model('Emgrand X7', null, './../assets/images/Geely Emgrand X7.png', [
        new Comp('Base', 31000),
        new Comp('Standart', 31800),
        new Comp('Comfort', 35000),
        new Comp('Luxury', 35500),
        new Comp('Flagship', 38500),
      ]),
      new Model('Emgrand 7', null, './../assets/images/Geely Emgrand 7.png', [
        new Comp('Standart', 24900),
        new Comp('Comfort', 25900),
        new Comp('Luxury', 29200),
      ])
    ]),
    new Mark('Skoda', null, [
      new Model('Rapid', null, './../assets/images/Skoda Rapid.png', [
        new Comp('Active', 26710),
        new Comp('Ambition', 30152),
        new Comp('Style', 32282),
      ]),
      new Model('Octavia', null, './../assets/images/Skoda Octavia.png', [
        new Comp('Active', 38181),
        new Comp('Ambition', 43097),
        new Comp('Style', 47522),
      ]),
      new Model('SuperB', null, './../assets/images/Skoda SuperB.png', [
        new Comp('Active', 56306),
        new Comp('Ambition', 57136),
        new Comp('Style', 64604),
        new Comp('Laurin & Klement', 90683),
      ]),

      new Model('Kodiaq', null, './../assets/images/Skoda Kodiaq.png', [
        new Comp('Active', 49161),
        new Comp('Ambition', 59484),
        new Comp('Style', 67514),
      ]),
    ]),
  ];
  /*
  allMarks: Mark[] = [
    {
      value: 'Geely',
      viewValue: 'Geely',
      minPrice : '',
      models: [
        {
          value: 'model1',
          viewValue: 'Модель 1',
          minPrice: '',
          comps: [
            new Comp('comp1', 'defrfddrfgd', '12000'),
            {
              value: 'comp1',
              viewValue: 'defrfddrfgd',
              price: '12000'
            },
            {
              value: 'comp1',
              viewValue: 'defrfddrfgd',
              price: '12000'
            },
          ]
        },
      ]
    }
  ];
  */
  /*
  marks: Mark[] = [
    {value: 'Wolkswagen', viewValue: 'Волксваген', price: ' от 12000 BYR'},
    {value: 'Audi', viewValue: 'Ауди', price: '                 от 12000 BYR'},
    {value: 'Marsedes', viewValue: 'Марседес', price: '         от 12000 BYR'}
  ];

  audiModels: Model[] = [
    {value: 'model1', viewValue: 'Волксsesfrваген', price: ' от 12000 BYR'},
  ];

  audiModel1Comps: Comp[] = [
    {value: 'comp1', viewValue: 'defrfddrfgd', price: ' от 12000 BYR'},
  ];
  */
  

  selectedMark = 'Geely';
  models: Model[] = this.allMarks[ (this.findMark(this.selectedMark)) ].models;
  selectedModel: string = this.allMarks[ (this.findMark(this.selectedMark)) ].models[0].name;
  link = this.allMarks[ (this.findMark(this.selectedMark)) ].models[0].photo;
  comps: Comp[] =  this.allMarks[ (this.findMark(this.selectedMark)) ].models[this.findModel(this.selectedModel)].comps;
  selectedComp: string = this.allMarks[ (this.findMark(this.selectedMark)) ].models[this.findModel(this.selectedModel)].comps[0].name;

  price = this.allMarks[ (this.findMark(this.selectedMark)) ]
    .models[this.findModel(this.selectedModel)]
    .comps[ this.findComp(this.selectedComp) ]
    .price;

  isClosedMarksOptions = true;
  isClosedModelsOptions = true;
  isClosedCompsOptions = true;

  constructor(private dialog: MatDialog) {
    // Screen size
    this.clientWidth = document.documentElement.clientWidth;
    this.clientHeight = document.documentElement.clientHeight;
    window.addEventListener('resize', () => {
      this.clientWidth = document.documentElement.clientWidth;
      this.clientHeight = document.documentElement.clientHeight;
    });

    this.calculateMinPricesForMarks();
  }

  findModel(name: string) {
    let result = 0;
    this.models.forEach( (model: Model, i: number) => {
      if (model.name === name) {
        result = i;
      }
    });
    return result;
  }
  findMark(name: string) {
    let result = 0;
    this.allMarks.forEach( (mark: Mark, i: number) => {
      if (mark.name === name) {
        result = i;
      }
    });
    return result;
  }
  findComp(name: string) {
    let result = 0;
    this.comps.forEach( (comp: Comp, i: number) => {
      if (comp.name === name) {
        result = i;
      }
    });
    return result;
  }

  calculateMinPricesForMarks() {
    this.allMarks.map( (mark: Mark) => {
      mark.models.map( (model: Model) => {
        const compPrices: number[] = [];
        model.comps.forEach((value: Comp, ) => {
          compPrices.push(value.price);
        });
        model.minPrice = Math.min(...compPrices);
      });
      const modelPrices: number[] = [];
      mark.models.forEach((value: Model, ) => {
        modelPrices.push(value.minPrice);
      });
      mark.minPrice = Math.min(...modelPrices);
    });
    console.log(this.allMarks);
  }

  // begin Slider Functions

  closeMarksOptions() {
    this.isClosedMarksOptions = true;
    this.models = this.allMarks[ (this.findMark(this.selectedMark)) ].models;
    this.selectedModel = this.models[0].name;
    this.comps =  this.models[this.findModel(this.selectedModel)].comps;
    this.selectedComp = this.comps[0].name;
    this.link = this.models[this.findModel(this.selectedModel)].photo;
    this.price = this.comps[ this.findComp(this.selectedComp) ].price;
  }
  openMarksOptions(event: boolean) {
    if (event) { this.isClosedMarksOptions = false; }
  }
  closeModelsOptions() {
    this.isClosedModelsOptions = true;
    this.link = this.allMarks[ (this.findMark(this.selectedMark)) ].models[this.findModel(this.selectedModel)].photo;
    this.comps =  this.allMarks[ (this.findMark(this.selectedMark)) ].models[this.findModel(this.selectedModel)].comps;
    this.selectedComp = this.allMarks[ (this.findMark(this.selectedMark)) ].models[this.findModel(this.selectedModel)].comps[0].name;
    this.price = this.comps[ this.findComp(this.selectedComp) ].price;
  }
  openModelsOptions(event: boolean) {
    if (event) { this.isClosedModelsOptions = false; }
  }
  closeCompsOptions() {
    this.isClosedCompsOptions = true;
    this.price = this.comps[ this.findComp(this.selectedComp) ].price;
  }
  openCompsOptions(event: boolean) {
    if (event) { this.isClosedCompsOptions = false; }
  }

  // end Slider Functions

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

  
























  wordToIndex(word: string, array: string[]): number {
    return array.indexOf(word);
  }
  indexToWord(index: number, array: string[]): string {
    return array[index];
  }

  // BEGIN CALCULATION FUNCTIONS
  getFirstPaymentPercentageValue(): number {
    if (this.creditLisingValue === 0) {
      return this.firstPaymentPercentageValue;
    } else {
      return this.lisingFirstPaymentPercentageValue;
    }
  }
  calculateFirstPayment(): number {
    return +(this.price * (0.01 * this.getFirstPaymentPercentageValue())).toFixed(2);
  }
  calculatePeriod(): number {
    if (this.creditLisingValue === 0) {
      return this.repaymentPeriodValue;
    } else {
      return this.lisingRepaymentPeriodValue;
    }
  }
  getFirstPayment(): string {
    let firstPaymentValue: number;
    if (this.creditLisingValue === 0) {
      firstPaymentValue = this.firstPaymentPercentageValue;
    } else {
      firstPaymentValue = this.lisingFirstPaymentPercentageValue;
    }
    return `${this.calculateFirstPayment()} BYN (${firstPaymentValue}%)`;
  }
  getPeriod(): string {
    return this.calculatePeriod() + ' Месяца';
  }

  getOtherBrandRate(): number {
    return 0.1549;
  }

  getPersentagesForNewAndFL() {
    if (this.creditLisingValue === 0) {
      return this.percentagesForUFNewCredit;
    } else {
      return this.percentagesForUFNewLising;
    }
  }
  calculateRate(): number {
    // start IF BLOCK
    let array;
    if (this.selectedNew === 'new' && this.selectedFace === 'F') {
      array = this.getPersentagesForNewAndFL();
    }
    // end IF BLOCK

    let percentagesArray;
    let tempKey = '-1';
    for (const key in array) {
      if ((this.calculatePeriod() / 12) <= +key && (this.calculatePeriod() / 12) > +tempKey) {
        percentagesArray = array[key];
      }
      tempKey = key;
    }

    let selectedPercentagePayment;
    let temporaryPecentagePaymentKey = '0';
    for (const key in percentagesArray) {
      if (this.getFirstPaymentPercentageValue() < +key && this.getFirstPaymentPercentageValue() >= +temporaryPecentagePaymentKey) {
        selectedPercentagePayment = percentagesArray[temporaryPecentagePaymentKey];
      }
      if (this.getFirstPaymentPercentageValue() >= 70) {
        selectedPercentagePayment = percentagesArray[70];
      }
      if (this.getFirstPaymentPercentageValue() == 0) {
        selectedPercentagePayment = percentagesArray[0];
      }
      temporaryPecentagePaymentKey = key;
    }

    return selectedPercentagePayment * 0.01;
  }

  getPLT(): number {
    const sum = this.price - ((this.getFirstPaymentPercentageValue() * 0.01) * this.price);
    const result = this.PLT( (this.calculateRate() / 12), this.calculatePeriod(), sum);
    if (isNaN(result)) {
      // show ERROR MESSAGE NOT POSSIBLE GET CREDIT WITH 0 PERCETAGE FIRST PAYMENT AND > 5 YEARS PERIOD REPAYMENT
      return 0;
    }
    return result;
  }
  PLT(rate: number, period: number, creditSum: number): number {
    return (-(-rate * (creditSum *  Math.pow(( 1 + rate), (period)) )) / ( Math.pow((1 + rate), (period)) - 1));
  }

  /*
  getExtraPayment() {
    const sum = this.price - ((this.firstPaymentPercentageValue * 0.01) * this.price);
    const result = this.PLT( (this.getRate() / 12), this.repaymentPeriodValue, sum);
    const compareResult = this.PLT( (this.getOtherBrandRate() / 12), this.repaymentPeriodValue, sum);
    const finalResult = (result - compareResult) * this.repaymentPeriodValue;
    return finalResult + ' BYN';
  }
  */
  // THE END CALCULATIONS FUNCTIONS





}
