import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name : string = '';
  username : string = '';
  password : string = '';


  signup(){
    console.log(this.name + " " + this.username + " " + this.password);
  }
}
