import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-market-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent {
  
  products: Array<string> = [
    "Sugar22 Ray Robinson",
    "Muhammad Ali",
    "George Foreman",
    "Joe Frazier",
    "Jake LaMotta",
    "Joe Louis",
    "Jack Dempsey",
    "Rocky Marciano",
    "Mike Tyson",
    "Oscar De La Hoya"
  ];
  missing: Array<string> = [];
  acquired: Array<string> = [];
}
