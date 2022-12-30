import { Injectable } from '@angular/core';
import { domain, api } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AllFunctionsService {
  constructor(private http: HttpClient, private auth: AuthService) {}
  private subject = new Subject<any>();
  private headers = new HttpHeaders()
    .append('Accept', 'application/json')
    .append('Content-Type', 'application/json')
    .append('Authorization', `Bearer ${this.auth.getAuthToken()}`);

  getPlayLists(): Observable<any> {
    const url = domain.api + api.playlist;
    const options = { headers: this.headers };
    return this.http.get<any>(url, options);
  }

  getPlayListById(id: string): Observable<any> {
    const url = `${domain.api}${api.playlists}/${id}?market=VN`;
    const options = { headers: this.headers };
    return this.http.get<any>(url, options);
  }
  getTrackByID(id: string): Observable<any> {
    const url = `${domain.api}${api.playlists}/${id}/tracks?market=VN`;
    const options = { headers: this.headers };
    return this.http.get<any>(url, options);
  }

  getIFrameSpotify(type: string, id: string): Observable<any> {
    const url = `${domain.domainIframe}?url=${domain.domainOpenSpotify}${type}/${id}`;
    return this.http.get<any>(url);
  }
  searchData(type: string, key: string ) {
    const url = `${domain.api}${api.search}`;
    const body = new HttpParams()
    .append('q', key)
    .append('type',type)
    .append('limit','40')
    .append('market','VN')
    const options = { headers: this.headers, params: body };
    return this.http.get(url,options);
  }

  loadAll(): Observable<any> {
    return this.subject.asObservable();
  }
  createData(data: any, type: string) {
    this.subject.next({type,data});
  }

  getAllAblums(ids:string,market:string = 'VN'): Observable<any>{
    const url = `${domain.api}${api.ablum}`
    const body = new HttpParams()
    .append('ids', ids)
    .append('market',market)
    const options = { headers: this.headers, params: body };
    return this.http.get(url,options)
  }
}

