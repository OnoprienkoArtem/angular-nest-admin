import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { Login } from '../interfaces/login.interface';
import { Register } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public register(body: Register): Observable<any> {
    return this.http.post(`${environment.api}/register`, body);
  }

  public login(body: Login): Observable<User> {
    return this.http.post<User>(`${environment.api}/login`, body);
  }

  public user(): Observable<User> {
    return this.http.get<User>(`${environment.api}/user`);
  }

  public logout(): Observable<void> {
    return this.http.post<void>(`${environment.api}/logout`, {});
  }

  public updateInfo(data: any): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/info`, data);
  }

  public updatePassword(data: any): Observable<User> {
    return this.http.put<User>(`${environment.api}/users/password`, data);
  }
}
