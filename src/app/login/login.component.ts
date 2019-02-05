import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  name: string;
  password: string;
  enaleLoginButton: Boolean;
  spinOn: boolean;

  constructor( public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    // this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }


  ngOnInit() {
    this.enaleLoginButton = false;
  }


  login() {
    this.message = 'Trying to log in ...';
    this.spinOn = true;
    if (this.name) {
      localStorage.setItem('name', this.name);
    }

    this.authService.login('/patients').subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';
        this.spinOn = false;

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
    // this.router.navigateByUrl('/patients');
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
