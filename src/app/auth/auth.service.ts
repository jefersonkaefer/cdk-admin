import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
import { Restangular } from "ngx-restangular";
import { User } from "../models/user.model";
import { TokenService } from "./token.service";
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable()
export class AuthService {
  private user: User;
  private token_decode: object;

  constructor(
    private restangular: Restangular,
    private route: Router,
    private tokenService: TokenService
  ) {
    const jwt = new JwtHelperService();
    this.token_decode = jwt.decodeToken(this.tokenService.getToken());
    this.user = new User();
    this.user.email = this.token_decode["email"];
    this.user.name = this.token_decode["name"];
  }

  public getUser(): User {
    return this.user;
  }

  public authenticate(user: User) {
    return this.restangular
      .all("authenticate")
      .post(user)
      .subscribe(response => {
        if (response.status === 200) {
          localStorage.setItem("token", response.body.token);
          return this.route.navigate(["/"]);
        } else {
          return false;
        }
      });
  }

  public logout() {
    localStorage.removeItem("token");
    console.log("por aqui");
  }
}
