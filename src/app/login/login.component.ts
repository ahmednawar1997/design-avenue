import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '/node_modules/bootstrap/dist/css/bootstrap.css']
})
export class LoginComponent implements OnInit {

  user!: { email: string, password: string };
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = {
      email: '',
      password: ''
    };
  }


  submitForm = () => {
    if (this.user.email && this.user.password) {
      this.authService.login(this.user)
        .subscribe(() => {
          console.log('User is logged in');
          this.router.navigateByUrl('admin');
        });
    }

  }
}
