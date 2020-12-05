import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  customerAlready = false;
  contentAnimate = false;

  signUpClicked(customerAlready){
    this.contentAnimate = customerAlready;

    setTimeout(() => {
      this.customerAlready = customerAlready;
    }, 600);
  }
}
