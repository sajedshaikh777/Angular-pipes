import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value.charAt(0) === '-' ? '-' + value.substring(4, value.length) : value.substring(3, value.length);

  }

}
