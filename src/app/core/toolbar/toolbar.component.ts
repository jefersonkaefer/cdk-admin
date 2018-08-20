import { User } from "./../../models/user.model";
import { AuthService } from "./../../auth/auth.service";
import { Component, OnInit, Input } from "@angular/core";
import { ToolbarHelpers } from "./toolbar.helpers";
import { TokenService } from "../../auth/token.service";

@Component({
  selector: "cdk-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  @Input()
  sidenav;
  @Input()
  sidebar;
  @Input()
  drawer;
  @Input()
  matDrawerShow;
  searchOpen: boolean = false;
  toolbarHelpers = ToolbarHelpers;
  currentUser: User;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getUser();
  }

  ngOnInit() {}
}
