import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../model/register.interface';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../public.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordConfirm = '';  

  constructor(
    private publicService: PublicService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    const registerData: Register = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm,
    }   

    this.publicService.register(registerData).subscribe(() => this.router.navigate(['/login']));
  }
}
