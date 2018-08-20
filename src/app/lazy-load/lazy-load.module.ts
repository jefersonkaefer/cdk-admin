import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard.service";
import { AuthModule } from "../auth/auth.module";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: "../auth/auth.module#AuthModule",
    canActivate: [AuthGuard]
  },
  {
    path: "home",
    loadChildren: "../home/home.module#HomeModule",
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    loadChildren: "../register/register.module#RegisterModule"
  },
  { path: "login", loadChildren: "../pages/login/login.module#LoginModule" },
  // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},

  {
    path: "**",
    redirectTo: "auth/dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LazyLoadModule {}
