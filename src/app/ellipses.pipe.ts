import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipses'
})
export class EllipsesPipe implements PipeTransform {

  transform(value: any, args?: any): any {

  	if( !args ) {
  		return value;
  	}
  	else if( value.lenght < args ) {
  		return value;
  	}
  	else {
  		return value.substring(0, args) + '...';
  	}

  
  }

}
