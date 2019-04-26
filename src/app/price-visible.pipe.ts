import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceVisible'
})
export class PriceVisiblePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `от ${value} BYR`;
  }

}
