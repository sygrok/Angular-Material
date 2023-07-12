import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm:FormGroup | any;

  constructor(private authService:AuthService){}
  ngOnInit():void{
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators:[Validators.required, Validators.email]}),
      password: new FormControl('', {validators:[Validators.required, Validators.minLength(6)]})
    })    
  }

  onLogin(){
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })
  }


}
