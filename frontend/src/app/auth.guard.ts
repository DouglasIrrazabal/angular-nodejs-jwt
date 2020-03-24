import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authServices: AuthService,
    private router: Router
  ) { }
  
  canActivate(): boolean {
    if(this.authServices.LoggedIn()) {
      return true;
    }else{
      this.router.navigate(['/signin']);
      return false;
    }
  }
  
}
