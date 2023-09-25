# BrewIT

BrewIT is a simple web application built as a hobby project to explore Angular development. The application allows users to browse beers from the PunkAPI, add them to a cart, and place an order.

## Current Features

- Users can browse beers listed from the PunkAPI.
- Users can add beers to their cart and place an order.
- Users can view the details of each beer.

## Limitations

- The application currently has no user login and authentication system.
- It is not responsive, so it might not work optimally on all device sizes.

## Technical Details

### Fetching Beers
The application fetches beer data using the PunkAPI service. Below is the service method used for fetching the beers.

```typescript
export class PunkApiService {
  private readonly BASE_URL = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  getBeers(page: number, perPage: number): Observable<Beer[]> {
    const url = `${this.BASE_URL}?page=${page}&per_page=${perPage}`;
    return this.http.get<Beer[]>(url);
  }
}
```

### Placing Orders
The application sends out the order using the `OrderService`. The method below is used to place the order.

```typescript
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
```