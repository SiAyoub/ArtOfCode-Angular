import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
 
  public setAuthenticationResponse(response: any): void {
    localStorage.setItem("access_token", response.access_token);
    localStorage.setItem("refresh_token", response.refresh_token);
    localStorage.setItem("role", response.role);
  }

  public getAccessToken(): string | null {
    return localStorage.getItem("access_token");
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem("refresh_token");
  }

  public getRole(): string | null {
    return localStorage.getItem("role");
  }

  public clearAuthentication(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("role");
  }
  public isLoggedIn(){
    return this.getRole()&&this.getAccessToken;
  }
}
