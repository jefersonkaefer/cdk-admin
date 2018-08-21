import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";

const marketRoutes: Routes = [
  {
    path: "list",
    component: ListComponent,
    data: { animation: "list" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(marketRoutes)],
  exports: [RouterModule]
})
export class MarketRouterModule {}
