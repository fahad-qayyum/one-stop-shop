import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}')]),
      'reEnteredPassword': new FormControl(null, Validators.required)
    })
  }

  onClear() {
    this.signUpForm.reset();
  }

  checkForControlErrors(control: string) {
    return this.signUpForm.get(control).errors && this.signUpForm.get(control).dirty;
  }

  onSubmitForm() {
    this.onClear();
  }

}
