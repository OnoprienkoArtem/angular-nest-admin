import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './model/login.interface';
import { Register } from './model/register.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

  public register(body: Register) {
    return this.http.post(`${environment.api}/register`, body);
  }

  public login(body: Login) {
    return this.http.post(`${environment.api}/login`, body, {withCredentials: true});
  }
}
