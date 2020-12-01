import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalRound';
  div1;
  div2;
  customerAlready = false;

  SignUpClicked(){
    this.div1 = document.getElementById('comp1');
    this.div2 = document.getElementById('comp2');

    if(!this.customerAlready){
      this.div1.parentNode.insertBefore(this.div2,this.div1);
      document.getElementById('hello').innerHTML = "Create your account";
      document.getElementById('text1').innerHTML = "or use your email to create account";
      document.getElementById('signIn').innerHTML = "Sign up";
      document.getElementById('button2').innerHTML = "Sign in";
      document.getElementById('rememberMeDiv').style.display = "none";
      document.getElementById('haveText').innerHTML = "Already have an account?";
      document.getElementById('fill').innerHTML = "Welcome back!We've missed you.";
    } else {
      this.div2.parentNode.insertBefore(this.div1,this.div2);
      document.getElementById('hello').innerHTML = "Hello friend!";
      document.getElementById('text1').innerHTML = "or use your email address";
      document.getElementById('signIn').innerHTML = "Sign in";
      document.getElementById('rememberMeDiv').style.display = "block";
      document.getElementById('haveText').innerHTML = "Don't have an account?";
      document.getElementById('fill').innerHTML = "Fill in some basic stuff so that we get to know you";
      document.getElementById('button2').innerHTML = "Sign up";
    }

    this.customerAlready = !this.customerAlready;
  }
}
