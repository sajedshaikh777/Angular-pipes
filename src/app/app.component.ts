import { Component, Inject, ViewChild, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
// import { Session9Service, Session9ServiceNew } from './session9.service';
import { Session9Service } from './session9.service';
import { CalculatorService } from './calculator.service';
import { HeaderComponent } from './header/header.component';

import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ CalculatorService, { provide: Session9Service, useClass: Session9ServiceNew } ]
  providers: [ CalculatorService, Session9Service ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  title = 'app works!';

  constructor( ){

  }


 





  // constructor( private router : Router ){

  // }

  // goToOtherRoute = function() {
  //   this.router.navigate(['./about']);
  // }





  // @ViewChild( HeaderComponent ) headerComp: HeaderComponent;

  // callChildFunctions = function(){
  //   this.headerComp.dummyFunction();
  // }


  // @ViewChildren( HeaderComponent ) headerComps: QueryList<HeaderComponent>;

  // callChildFunctions = function(){
  //   // console.log( this.headerComps.last.dummyFunction() );

  //   // Or with ForEach loop 
  //   this.headerComps.forEach( function( value ){
  //     console.log( value );
  //   })



  // }



  // getInfoFromHeaderComponent = function(event){
  // 	console.log(event);
  // }


  // myName: object = {
  // 	firstName: 'Sajed',
  // 	lastName: 'Shaikh'
  // }


  // svc : CalculatorService;

  // constructor( public session9svc : Session9Service, @Inject( CalculatorService ) calcSvc ){
  //   this.svc = calcSvc;
  // }


  // info: Array<Object>;

  // getInfo = function() {
  //   // console.log("Inside getinfo function.");
  //   // this.info = this.session9svc.getMoreData();
  //   this.info = this.session9svc.getData();
  //   console.log(this.info);
  //   console.log(this.svc.add(50, 30));
  // }

}
