import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoginMode = this.authService.isLoginMode;
  }

  onLoginClick() {
    this.authService.isLoginMode = !this.authService.isLoginMode;
    this.isLoginMode = this.authService.isLoginMode;
  }
}
