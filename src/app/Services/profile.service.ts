import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  addProfile(profileData: FormData): Observable<any> {
    return this.http.post<any>('http://localhost:8089/user/api/v1/auth/profile/add', profileData);
  }

  getDataFromToken(token:string|null){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("service",headers)
    return this.http.post<any>('http://localhost:8089/user/api/v1/auth/decode-token',{},{headers})
  }
}
