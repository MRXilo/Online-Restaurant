import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public service: ApiService) {
    this.showAll()
    this.getAllCart()
  }

  public cartArea:any;
  public cartList: any;
  public allPrice: any;
  public info: any;
  showAll() {
    this.service.getAllBaskets().subscribe( {
      next: (data:any) => {
        console.log(data);
        this.cartArea = data
      },
      error: () => {}
    } )
  }


 

  increase(item: any) {
    item.quantity++

    let cartObject = {
      "quantity": item.quantity,
      "price": item.price,
      "productId": item.product.id
    }

    console.log(cartObject);
    this.service.updateCart(cartObject).subscribe( () => this.getAllCart() )
  }


  deleteItem(id: any) {
    this.service.removeItem(id).subscribe( () => {
      this.getAllCart()
    } )
  }

  decrease(item:any) {
    item.quantity--

    let cartObject = {
      "quantity": item.quantity,
      "price": item.price,
      "productId": item.product.id
    }

    console.log(cartObject);
    this.service.updateCart(cartObject).subscribe( () => this.getAllCart() )
  }


  getAllCart() {
    this.service.getAllBaskets().subscribe( (data:any) => {
      console.log(data);
      this.cartList = data
      let totalPrice = data.map( (item:any) => item.quantity * item.price ).reduce( (x:number, y:number) => x + y )

      console.log(totalPrice);
      this.allPrice = totalPrice
      
    } )

   
  }
  
}
