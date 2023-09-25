import { Component,OnInit } from '@angular/core';
import { PunkApiService } from 'src/app/services/punk-api.service';
import { Beer } from 'src/app/model/Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [];
  currentPage: number = 1;
  perPage: number = 10;
  hasNextPage: boolean = true;
  displayedPages: number[] = [1, 2, 3, 4, 5];
  
  constructor(private punkApiService: PunkApiService) { }
  
  ngOnInit(): void {
    this.loadBeers();
  }
  
  loadBeers(): void {
    this.punkApiService.getBeers(this.currentPage, this.perPage).subscribe(
      data => {
        this.beers = data;
        this.hasNextPage = data.length === this.perPage;
        this.adjustDisplayedPages();
      },
      error => console.error('Error fetching beers', error)
    );
}

  nextPage(): void {
    if (this.hasNextPage) {
    this.currentPage++;
      this.adjustDisplayedPages();
      this.loadBeers();
    }
  }
    
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.adjustDisplayedPages();
      this.loadBeers();
    }
  }
    
  goToPage(page: number): void {
    if (page >= 1 && (!this.hasNextPage && page > this.currentPage) && page !== this.currentPage) {
      return;
    }
    this.currentPage = page;
    this.loadBeers();
    this.adjustDisplayedPages();  
  }
    
  adjustDisplayedPages(): void {
    const halfRange = 2;
    let startPage = Math.max(this.currentPage - halfRange, 1); 
    let endPage = this.currentPage + halfRange; 
    if (this.currentPage === 1) {
        startPage = 1;
        endPage = 5;
    }
    if (this.currentPage === 2) {
      startPage = 2;
      endPage = 6;
    }
    if (!this.hasNextPage) {
        endPage = this.currentPage;
        startPage = Math.max(endPage - 4, 1);
    }
    this.displayedPages = Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage);
  }
}