import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  public getPhotos():Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }

  public getAlbums():Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/albums");
  }

  public getPhotosById(id:number){
    return this.http.get("https://jsonplaceholder.typicode.com/albums?albumId="+id);
  }
}
