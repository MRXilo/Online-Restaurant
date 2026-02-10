import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '../user-info/user-info.component';


@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule,CommonModule ,UserInfoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public service: ApiService) {}
  public loginFormInfo: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
userData: any;

 loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
 isLoggedIn = false;


  login() {
    console.log();
    this.service.signIn(this.loginFormInfo.value).subscribe((data: any) => {
      console.log(data);
      sessionStorage.setItem('user', data.access_token);
       this.userData = data;
       this.userData = data.user;
        this.isLoggedIn = true;
     
    });
  }

}
