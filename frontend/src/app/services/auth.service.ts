import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  SignUp(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  SignIn(user) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  LoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  Logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
