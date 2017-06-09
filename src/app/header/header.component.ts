import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('name') name;

  dummyFunction = function(){
    console.log('hiii');
  	// console.log(this.name);
  }


  @Output()
  customClick = new EventEmitter();


  logout = function(){
  	console.log('logout is clicked');
  	this.customClick.emit('Person is logged out.');
  }

  user: object = {
  	email : 'sajed@gmail.com',
  	pwd : '123456'
  }



}
