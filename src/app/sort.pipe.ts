import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<number>, args?: any): any {
    
  	if( args == undefined || args == 'asc' ) {
  		array.sort();
  	}

  	if( args == 'desc' ) {
  		array.sort( function(a, b) { return b - a } );
  	}

  	return array;

  }

}
