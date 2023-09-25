import { Component ,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/CartItem';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  dataSource: any[] = [];
  displayedColumns: string[] = ['name', 'quantity', 'price', 'totalPrice', 'actions'];
  totalPrice: number = 0;
  private userId = 1;
  constructor(
    private cartService: CartService,
    private router: Router, 
    private orderService: OrderService
  ){ }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.dataSource = this.cartService.getCart().map(item => {
      const price = this.getPrice(item.beer.abv);
      const totalPrice = price * item.count;
      return { ...item, price, totalPrice };
    });
    
    this.totalPrice = this.dataSource.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  getPrice(abv: number): number {
    return abv;
  }

  addToCart(item: CartItem): void {
    this.cartService.addItem(item.beer, 1);
    this.loadCartItems();
  }

  decreaseCount(item: CartItem): void {
    this.cartService.decreaseCount(item.beer.id);
    this.loadCartItems();
  }

  placeOrder() {
    if (this.dataSource && this.dataSource.length > 0) {
      this.orderService.placeOrder(this.dataSource, this.userId).subscribe(
        response => {
          console.log('Order placed successfully:', response);
          this.orderService.clearCartItems();
          this.cartService.emptyCart();
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error placing order:', error);
        }
      );
    } else {
      console.error('There was an error');
    }
  }
  
}
