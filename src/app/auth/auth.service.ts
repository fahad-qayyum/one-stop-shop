import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoadingSubject = new BehaviorSubject<boolean>(false);
  successMessage = new Subject<string>();
  errorMessage = new Subject<string>();
  isloginMode: boolean;
  isLoginModeSubject = new Subject<boolean>();

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  toggleLoginMode() {
    this.isloginMode = !this.isloginMode;
    this.isLoginModeSubject.next(this.isloginMode);
  }

  signUp(email: string, password: string) {
    this.isLoadingSubject.next(true);
    return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.APIKey, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError)).subscribe(onSuccess => {
      console.log(onSuccess);
      if (onSuccess.idToken) {
        this.successMessage.next('Hurray !! Account created, Sign in now please');
        this.errorMessage.next(null);
        this.isLoadingSubject.next(false);
        this.toggleLoginMode();
      }
    }, error => {
      this.successMessage.next(null);
      this.isLoadingSubject.next(false);
      this.errorMessage.next(error.toString());
    });
  }

  logIn(email: string, password: string) {
    this.isLoadingSubject.next(true);
    return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.APIKey, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError)).subscribe(onSuccess => {
      console.log(onSuccess);
      this.successMessage.next('Login Successful! Redirecting Now')
      this.errorMessage.next(null);
      setTimeout(() => {
        this.router.navigate(['/items']);
        this.isLoadingSubject.next(false);
      }, 2000);
    }, error => {
      this.isLoadingSubject.next(false);
      this.successMessage.next(null);
      this.errorMessage.next(error.toString());
    });
  }


  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = "An unknown error occurred";
    if (!errorResponse.error.error.message) {
      // throwError make the errorMessage an an observable so that it can be subscribed in the component
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {

      // for the sign up

      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;

      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Max allowed attempts exceeded, please try later';
        break;

      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this app';
        break;

      case 'INVALID_EMAIL':
        errorMessage = 'The email that you entered isn\'t valid! try again';
        break;

      //  for the sign in

      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email was not found';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'This password was not valid';
        break;

      case 'USER_DISABLED':
        errorMessage = 'This user is disabled';
        break;

      default:
        errorMessage = errorResponse.error.error.message;
    }
    return throwError(errorMessage);
  }

  // private handleAuthentication(
  //   email: string,
  //   id: string,
  //   token: string,
  //   expiresIn: number
  // ) {
  //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //   const user = new User(
  //     email,
  //     id,
  //     token,
  //     expirationDate
  //   );
  //   this.user.next(user);
  //   this.autoLogout(expiresIn * 1000);
  //   localStorage.setItem('userData', JSON.stringify(user));
  // }

}
