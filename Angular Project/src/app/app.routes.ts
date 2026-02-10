import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path:"cart", component: CartComponent},
    {path:"registr", component:RegisterComponent},
];
