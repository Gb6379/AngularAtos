import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/api/test';
const API_URL2 = 'http://localhost:8080/api/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }

  getAllUsers() : Observable<any> {
    return this.http.get(API_URL2 , {responseType: 'text'});
  }

  saveUser(username: string, password: string) : Observable<any> {
    return this.http.post(API_URL2 , {
      username,
      password
    }, httpOptions);
  }

  updateUser(id: number) : Observable<any>{
    return this.http.put(API_URL + '/${id}', {responseType: 'text'})
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(API_URL + '/${id}', {responseType: 'text'})
  }
}
