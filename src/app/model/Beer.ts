export interface Beer {
    id: number;
    name: string;
    description: string;
    image_url: string;
    abv: number; // As there is no price in the received JSON I have decided to use abv as the price of the beers
  }
  