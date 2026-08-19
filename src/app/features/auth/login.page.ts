import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {
  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;

  submit(): void {
    // Ready to connect to the authentication API.
  }
}
