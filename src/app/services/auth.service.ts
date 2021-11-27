import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  public login(body: Login): Observable<any> {
    return this.http.post(`${environment.api}/login`, body, {withCredentials: true});
  }

  public user(): Observable<any> {
    return this.http.get(`${environment.api}/user`, {withCredentials: true});
  }
}
