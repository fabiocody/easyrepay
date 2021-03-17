import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../model/login';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token: string | null;
  private refresh: string | null;
  private authHeader = {Authorization: ''};

  constructor(
    private http: HttpClient,
  ) {
    this.token = localStorage.getItem('token');
    this.refresh = localStorage.getItem('refresh');
    if (this.token) {
      this.authHeader.Authorization = 'Bearer ' + this.token;
    }
  }

  public hasToken(): boolean {
    return this.token !== null;
  }

  public login(username: string, password: string): Observable<Login> {
    return this.http.post<Login>(environment.apiUrl + '/api/token', {username, password})
      .pipe(
        map(login => {
          console.log('LOGIN', login);
          this.token = login.access;
          localStorage.setItem('token', this.token);
          this.refresh = login.refresh;
          localStorage.setItem('refresh', this.refresh);
          this.authHeader.Authorization = 'Bearer ' + login.access;
          return login;
        })
      );
  }

  public logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.refresh = null;
    localStorage.removeItem('refresh');
    this.authHeader.Authorization = '';
    this.refresh = null;
  }

  public getUserInfo(): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/api/me', {
      headers: this.authHeader
    });
  }
}
