import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LazyLoadModule } from "./lazy-load/lazy-load.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { RestangularModule, Restangular } from "ngx-restangular";
import { AuthGuard } from "./auth/auth-guard.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/jwt.interceptor";
import { ErrorInterceptor } from "./helpers/error-interceptor";
import { TokenService } from "./auth/token.service";
import { JwtModule } from "@auth0/angular-jwt";

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setFullResponse(true);
  RestangularProvider.setBaseUrl("http://localhost/");
  RestangularProvider.setDefaultHeaders({
    Authorization: "Bearer " + TokenService.get()
  });
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return TokenService.get();
        }
      }
    })
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
