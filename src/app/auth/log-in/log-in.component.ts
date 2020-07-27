import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup;
  hide = true;
  errorMessage: string = null;

  constructor(private authService: AuthService) {
  }


  ngOnInit(): void {
    this.logInForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      // 'password': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')])
      'password': new FormControl(null, [Validators.required])
    })
  }

  onClear() {
    this.logInForm.reset();
  }

  checkForControlErrors(control: string) {
    return this.logInForm.get(control).errors && this.logInForm.get(control).touched;
  }

  onSubmitForm() {
    const email = this.logInForm.get('email').value;
    const password = this.logInForm.get('password').value;
    this.authService.logIn(email, password).subscribe(onSuccess => {
      console.log(onSuccess);
    }, error => {
      this.errorMessage = error
    });
  }

}
