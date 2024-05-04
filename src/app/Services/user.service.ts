import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getDataFromToken(token: any) {
    throw new Error('Method not implemented.');
  }
  submit(value: any) {
    throw new Error('Method not implemented.');
  }
  PATH_OF_API="http://localhost:8089";
  requestHeader=new HttpHeaders({"No-Auth":"True"}

  );
  constructor(private httpclient: HttpClient) { 

  }
  public login(loginData: any){
    return this.httpclient.post(this.PATH_OF_API+"/user/api/v1/auth/authenticate",loginData)
}
public register(registerData: any) {
  return this.httpclient.post(this.PATH_OF_API + "/user/api/v1/auth/register", registerData);
}
getAllUsers() {
  return this.httpclient.get<any[]>( this.PATH_OF_API+"/user/api/v1/auth/admin/getall");
}
}
