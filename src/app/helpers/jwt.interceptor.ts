import { TokenService } from "../auth/token.service";
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (TokenService.get()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${TokenService.get()}`
        }
      });
      console.log(TokenService.get());
    }
    return next.handle(request);
  }
}
