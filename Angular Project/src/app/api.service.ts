import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})
export class ApiService {

  constructor(public http: HttpClient) { }
  
 signUp(formObject: any) {
    return this.http.post("https://api.everrest.educata.dev/auth/sign_up", formObject)
  }
  signIn(loginFormObject:any) {
    return this.http.post("https://api.everrest.educata.dev/auth/sign_in", loginFormObject)
  }

  getAllFoods() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getAllCategories() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  filterFoods(id:number) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }

  postData(body: any) {
    return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", body)
  }


  getAllBaskets() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }


  deletee(id:any) {
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }

    
  updateCart(body: any) {
    return this.http.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", body)
  }

  removeItem(id: any) {
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }
  

}
  