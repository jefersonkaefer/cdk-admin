import { JwtHelperService } from "@auth0/angular-jwt";

import { Injectable } from "@angular/core";
@Injectable()
export class TokenService {
  constructor(private jwtHelper: JwtHelperService) {}
  ngOnInit() {
    console.log(this.jwtHelper.decodeToken(localStorage.getItem("token"))); // token
    console.log("expirate", this.jwtHelper.getTokenExpirationDate()); // date
  }
  public static get(): string {
    return localStorage.getItem("token");
  }
  public getToken(): string {
    return localStorage.getItem("token");
  }
  public static set(token: string): void {
    localStorage.setItem("token", token);
  }
}
