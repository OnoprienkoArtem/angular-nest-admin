import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './model/register.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

  public register(body: Register) {
    return this.http.post('http://localhost:8000/api/register', body);
  }
}
