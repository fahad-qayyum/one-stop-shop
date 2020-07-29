import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      // 'password': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')]),
      'password': new FormControl(null, [Validators.required]),
      'reEnteredPassword': new FormControl(null, Validators.required)
    })
  }

  onClear() {
    console.log("Form Cleared");
    this.signUpForm.reset();
  }

  checkForControlErrors(control: string) {
    return this.signUpForm.get(control).errors && this.signUpForm.get(control).touched;
  }

  onSubmitForm() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    this.authService.signUp(email, password);
  }

}
