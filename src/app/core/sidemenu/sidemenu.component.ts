import { AuthService } from "./../../auth/auth.service";
import { Component, OnInit, Input } from "@angular/core";
import { menus } from "./menu-element";
import { User } from "../../models/user.model";

@Component({
  selector: "cdk-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.scss"]
})
export class SidemenuComponent implements OnInit {
  @Input()
  iconOnly: boolean = false;
  public menus = menus;
  currentUser: User;
  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getUser();
  }

  ngOnInit() {}
}
