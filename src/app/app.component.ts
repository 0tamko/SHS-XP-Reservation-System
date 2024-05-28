import { Component, OnInit } from '@angular/core';
import { User } from 'oidc-client';
import { AuthService } from 'src/shared/auth-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  isLoggedIn = false;
  loggedInUser : string;

  constructor(private _authService: AuthService){
    this._authService.loginChanged.subscribe(loggedIn => {
      this.loggedInUser = loggedIn ? this._authService._user.profile.nickname ?? "" : "";
      this.isLoggedIn = loggedIn;
    })
  }
  
  ngOnInit(): void {
    this._authService.isLoggedIn().then(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  login(){
    this._authService.login();
 }

  logout(){
    this._authService.logout();
  }
}
