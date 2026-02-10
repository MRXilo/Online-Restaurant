import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public  service: ApiService ,
    private http: HttpClient
  ) {
    this.showAllProducts()
    this.allCategories()
    
  }

  public foodList: any;
  public categories: any;
  public activeCategory: number = 0


  allCategories() {
    this.service.getAllCategories().subscribe((data: any) => this.categories = data)
  }

  filterByCategory(id: number) {
    this.activeCategory = id
    this.service.filterFoods(id).subscribe((data: any) => {
      console.log(data.products);
      this.foodList = data.products
    })

  }

  showAllProducts() {
    this.activeCategory = 0
    this.service.getAllFoods().subscribe({
      next: (data: any) => this.foodList = data,
      error: (err) => { console.log(err) },
      complete: () => { console.log("stop loading...") }
    })
  }


  addToCart(fasi:number, id: number) {
    let cartData = {
      "quantity": 1,
      "price": fasi,
      "productId": id
    }

    this.service.postData(cartData).subscribe( (data:any) => {
      console.log("daemataaaa");
      
    } )
    
  }

 
  originalList: any[] = [];

  spiciness: number | null = null;
  noNuts: boolean = false;
  vegetarian: boolean = false;


   ngOnInit() {
    this.http.get<any[]>('https://restaurant.stepprojects.ge/api/Products/GetAll')
      .subscribe(data => {
        this.foodList = data;
        this.originalList = [...data]; // Keep copy
      });
  }

  applyFilter() {
    let filtered = this.originalList;

    if (this.spiciness !== null) {
      filtered = filtered.filter(item => item.spiciness === this.spiciness);
    }

    if (this.noNuts) {
      filtered = filtered.filter(item => !item.nuts); // ❌ NUTS
    }

    if (this.vegetarian) {
      filtered = filtered.filter(item => item.vegeterian); // ✅ VEGETARIAN
    }

    this.foodList = filtered;
  }

  resetFilter() {
    this.spiciness = null;
    this.noNuts = false;
    this.vegetarian = false;
    this.foodList = [...this.originalList];
  }
}