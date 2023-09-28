import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/user/v1';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, { username, password });
  }

  register(name: string, email: string,password: string): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, { name, email,password });
  }
}
