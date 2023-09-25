import { Component, Input } from '@angular/core';
import { Beer } from 'src/app/model/Beer';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent {
  @Input() beer!: Beer;
  showDescription: boolean = false;
  counter: number = 0;
  
  constructor( public cartService : CartService){}

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

  addToCart(beer: Beer): void {
    this.counter++;
    this.cartService.addItem(beer);
  }

  decreaseCount(beerId: number): void {
    const count = this.cartService.getItemCount(beerId);
    if (count > 0) {
      this.cartService.decreaseCount(beerId);
    }
  }
  
}
