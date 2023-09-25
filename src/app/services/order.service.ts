import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private API_URL = 'http://localhost:8080/api/order/v1/place-order';

  constructor(private http: HttpClient) { }

  placeOrder(cartItems: CartItem[], userId: number): Observable<any> {
    const order = {
      userId: userId,
      items: cartItems.map(item => ({
        beerId: item.beer.id,
        beerName: item.beer.name,
        
        count: item.count,
        totalPrice: item.count * item.beer.abv
      }))
    };
    return this.http.post(this.API_URL, order);
  }
  clearCartItems(){
    localStorage.removeItem('cart'); 
  }
}
