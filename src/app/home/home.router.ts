import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";

const homeRoutes: Routes = [
  {
    path: "tasks",
    component: TasksComponent,
    data: { animation: "tasks" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRouterModule {}
