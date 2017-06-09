import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learnpipes',
  templateUrl: './learnpipes.component.html',
  styleUrls: ['./learnpipes.component.css']
})
export class LearnpipesComponent implements OnInit {

  constructor() { }


  myBirthDate = new Date();

  myCourse = 'Angular2';

  courses : string[] = [
  	'Angular2',
  	'Node Js',
  	'Hadoop',
  	'Java',
  	'Python'
  ] 

  customerObj = {
    name: "Sajed",
    location: "Pune"
  }


  pi : number = 3.141597;


  a : number = 0.10;
  b : number = 0.55;

  longtext = "I am very long text";

  arr = [2, 4, 3, 7, 2, 9, 7, 5, 8]


  promise : Promise<string>;

  onClick() {
    this.promise = new Promise<string> ( function(resolve, reject){
      setTimeout (function() {
        resolve('Wooohooo resolved.');
      }, 3000)
    })
  }


  ngOnInit() {
  }

}
