import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
@Component({
  selector: 'app-autorization',
  imports: [RegisterComponent, LoginComponent],
  templateUrl: './autorization.component.html',
  styleUrl: './autorization.component.css'
})
export class AutorizationComponent {

}
