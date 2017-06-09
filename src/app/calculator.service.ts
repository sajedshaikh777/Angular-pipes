import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  add = function( a, b ){
  	return a+b;
  }

  getMoreInfo = function(){
  	let employeeInfo = [
		{ name: 'Sajed', salary: 50000 },
		{ name: 'Rahul', salary: 60000 },
		{ name: 'Rohit', salary: 70000 }
  	]
  	return employeeInfo;
  }

}
