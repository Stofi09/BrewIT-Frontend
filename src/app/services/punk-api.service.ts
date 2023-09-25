import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../model/Beer';

@Injectable({
  providedIn: 'root'
})
export class PunkApiService {
  private readonly BASE_URL = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  getBeers(page: number, perPage: number): Observable<Beer[]> {
    const url = `${this.BASE_URL}?page=${page}&per_page=${perPage}`;
    return this.http.get<Beer[]>(url);
  }
}
