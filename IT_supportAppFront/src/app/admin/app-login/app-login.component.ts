import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import {Role} from "../../Models/enum/Role";

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent  implements  OnInit{
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submitForm(form: FormGroup): void {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;
    this.service.login(email, password).subscribe(
      (response: { token: string }) => {
        this.service.saveToken(response.token);
        const role = this.service.getRole();
        console.log('Role after login:', role);
        if (role === Role.ADMIN) {

          this.router.navigate(['/admin/dashboard']);
        } else if (role === Role.TECHNICIEN) {
          this.router.navigate(['/admin/technicien']);
        } else if (role === Role.USER) {
          this.router.navigate(['/admin/users']);
        } else {
          console.error('Unknown role:', role);
          this.errorMessage = 'Unknown role.';
        }
      },
      (error: any) => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please check your email and password.';
      }
    );
  }
}

