import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  abstract get endpoint(): string;

  constructor(protected http: HttpClient) { }

  all(page?: number): Observable<any> {
    const pageParam = page ? `?page=${page}` : '';

    return this.http.get(`${this.endpoint}${pageParam}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.endpoint, data);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.endpoint}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}
