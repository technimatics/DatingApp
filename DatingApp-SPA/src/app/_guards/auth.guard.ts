import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService, private router:Router, private alertify:AlertifyService){}
  
  canActivate(): boolean {
    if (this.AuthService.loggedIn()) {
      return true;  
    }
    
    this.alertify.error('You Shall Behave My Boy!!');
    this.router.navigate(['/hello']);

    return false;
  }
  
}
