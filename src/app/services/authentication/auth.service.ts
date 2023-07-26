import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredential } from 'src/app/core/models/userCredential.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(credentials: Credential): Observable<UserCredential> {
    const url = `${this.BASE_URL}/auth/login`;
    return this.http.post<UserCredential>(url, credentials);
  }
}
