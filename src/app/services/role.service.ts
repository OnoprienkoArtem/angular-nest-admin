import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  endpoint: string = `${environment.api}/roles`;

  constructor(private http: HttpClient) { }

  all(): Observable<Role[]> {
    return this.http.get<Role[]>(this.endpoint);
  }
}
