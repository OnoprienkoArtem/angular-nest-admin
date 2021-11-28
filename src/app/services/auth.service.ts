import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { Login } from '../public/model/login.interface';
import { Register } from '../public/model/register.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public register(body: Register): Observable<any> {
    return this.http.post(`${environment.api}/register`, body);
  }

  public login(body: Login): Observable<User> {
    return this.http.post<User>(`${environment.api}/login`, body, {withCredentials: true});
  }

  public user(): Observable<User> {
    return this.http.get<User>(`${environment.api}/user`, {withCredentials: true});
  }
}
