import { Injectable } from '@angular/core';
import { domain, spotify, api } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: '*/*',
  });
  constructor(private http: HttpClient) {}
  getAuthCode() {
    const url = `${domain.url}/authorize?response_type=${spotify.response_type}&client_id=${spotify.client_id}&scope=${spotify.scope}&redirect_uri=${spotify.redirect_uri_login}&state=${spotify.state}`;
    window.location.href = url;
  }

  getToken(code: string): Observable<any> {
    const url = domain.url + api.token;
    const data = {
      code: code,
      grant_type: spotify.grant_type,
      redirect_uri: spotify.redirect_uri_login,
      client_id: spotify.client_id,
      client_secret: spotify.client_secret,
    };
    const body = new HttpParams({ fromObject: data });
    const options = { headers: this.headers };
    return this.http.post<any>(url, body, options);
  }
}
