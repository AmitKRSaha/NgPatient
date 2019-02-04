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

  constructor( public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }


  ngOnInit() {
  }


  login() {
    this.message = 'Trying to log in ...';

    this.authService.login('/patients').subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';

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
