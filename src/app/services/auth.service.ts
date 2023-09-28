import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/user/v1';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, { username, password }).pipe(
      tap((response: any) => {
        if (response && response.message) {
          this.cookieService.set('jwt_token', response.message, { secure: false, path: '/' }); // secure should be true in prod!
        }
      })
    );
  }

  register(name: string, email: string,password: string): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, { name, email,password });
  }

  getMe(): Observable<any> {
    const url = `${this.apiUrl}/me`;
    return this.http.get(url, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.cookieService.get('jwt_token')}`
      ),
    });
  }
}
