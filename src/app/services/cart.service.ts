import { Injectable } from '@angular/core';
import { Beer } from '../model/Beer';
import { CartItem } from '../model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
    this.cart = JSON.parse(storedCart);
    }
  }

  addItem(beer: Beer, count: number = 1): void {
    const existingItem = this.cart.find(item => item.beer.id === beer.id);
    if (existingItem) {
      existingItem.count += count;
    } else {
      this.cart.push({ beer, count });
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeItem(beerId: number): void {
    const index = this.cart.findIndex(item => item.beer.id === beerId);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getItemCount(beerId: number): number {
    const item = this.cart.find(item => item.beer.id === beerId);
    return item ? item.count : 0;
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  emptyCart(){
    this.cart = [];
  }

  decreaseCount(beerId: number): void {
    const item = this.cart.find(item => item.beer.id === beerId);
    if (item) {
      item.count -= 1;
      if (item.count <= 0) {
        this.removeItem(beerId);
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
