import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {

  customerAlready = false;
  contentAnimate = false;

  @Output() signUpClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onClick(){
    this.signUpClicked.emit(!this.customerAlready);

    setTimeout(() => {
      this.contentAnimate = !this.contentAnimate;
    }, 100);
    
    setTimeout(() => {
      this.customerAlready = !this.customerAlready;
    }, 500);
  }
}
