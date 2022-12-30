import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { domain, api } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, private auth: AuthService) {}
  private headers = new HttpHeaders()
  .append('Accept', 'application/json')
  .append('Content-Type', 'application/json')
  .append('Authorization', `Bearer ${this.auth.getAuthToken()}`)

  getProfile(): Observable<any> {
    const url = domain.api + api.profile;
    const options = { headers: this.headers };
    return this.http.get<any>(url, options);
  }
}
