import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private fb: FormBuilder) {}
  registerForm = this.fb.group({
    name: '',
    lastName: '',
    age: 0,
    email: '',
    password: '',
  });
  onSubmit(): void {
    console.log('submitted form', this.registerForm.value);
  }
  // goToMain(){
  //   this.router.navigate(['/main']);

  // }
}
