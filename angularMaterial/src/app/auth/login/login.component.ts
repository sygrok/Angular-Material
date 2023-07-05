import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm:FormGroup | any;

  ngOnInit():void{
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators:[Validators.required, Validators.email]}),
      password: new FormControl('', {validators:[Validators.required, Validators.minLength(6)]})
    })    
  }

  onLogin(){
    console.log(this.loginForm.value)
  }


}
