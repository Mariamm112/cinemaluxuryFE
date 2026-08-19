import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.page.html',
  styleUrls: ['./login.page.css', './register.page.css']
})
export class RegisterPage {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;
  showPassword = false;

  get passwordsMatch(): boolean {
    return !!this.password && this.password === this.confirmPassword;
  }

  submit(): void {
    if (!this.passwordsMatch) return;
    // Ready to connect to the registration API.
  }
}
