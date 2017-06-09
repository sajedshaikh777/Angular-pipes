import { Injectable } from '@angular/core';
import { CalculatorService } from './calculator.service';


@Injectable()
export class Session9Service {

  constructor( public calcSvc: CalculatorService ) {

  }

  getData = function(){
  	let info = this.calcSvc.getMoreInfo();
  	return info;
  }

}

// export class Session9ServiceNew extends Session9Service {
// 	getMoreData = function(){
// 	  	let employeeInfo = [
// 			{ id: 123, name: 'Sajed', salary: 50000 },
// 			{ id: 124, name: 'Rahul', salary: 60000 },
// 			{ id: 125, name: 'Rohit', salary: 70000 }
// 	  	]
// 	  	return employeeInfo;
// 	}
// }