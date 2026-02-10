import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder,  Validators } from '@angular/forms';
import { LoginComponent } from "../login/login.component";


import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from '../user-info/user-info.component';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule, LoginComponent ,UserInfoComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(public service: ApiService) {}

public isRegistered = false;
public userData: any;

  public registerFormInfo: FormGroup = new FormGroup( {
    firstName: new FormControl(),
    lastName : new FormControl(),
    age : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    address : new FormControl(),
    phone : new FormControl("+995"),
    zipcode : new FormControl(),
    avatar: new FormControl(),
    gender : new FormControl(),
  } )

  register() {
    console.log();
    this.service.signUp(this.registerFormInfo.value).subscribe( (data:any) => {
      console.log(data);
       this.userData = data; // ან this.registerFormInfo.value – თუ API უკან არაფერს აბრუნებს
      this.isRegistered = true;
      this.userData = this.registerFormInfo.value;
    } )
  }

}