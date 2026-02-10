import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
 @Input() user: any;



}
