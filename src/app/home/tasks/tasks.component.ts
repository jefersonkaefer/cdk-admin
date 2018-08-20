import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent {
  tasks: Array<string> = [
    "Sugar Ray Robinson",
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
  developers: Array<string> = [];
  testers: Array<string> = [];
}
