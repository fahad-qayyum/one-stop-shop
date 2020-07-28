import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean;
  successMessage: string;
  errorMessage: string;
  isLoading = false;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isLoginModeSubject.subscribe((loginMode: boolean) => {
      this.isLoginMode = loginMode;
    })
    this.authService.errorMessage.subscribe(errorMessage => {
      this.errorMessage = errorMessage;
    })
    this.authService.successMessage.subscribe(successMessage => {
      this.successMessage = successMessage;
    })
    this.authService.isLoadingSubject.subscribe(isLoading => {
      this.isLoading = isLoading;
    })


  }

  onLoginClick() {
    this.authService.toggleLoginMode();
  }
}
