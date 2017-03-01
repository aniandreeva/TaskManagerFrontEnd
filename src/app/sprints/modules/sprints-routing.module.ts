import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SprintsComponent} from "../sprints.component";
import {SprintsListComponent} from "../sprints-list/sprints-list.component";
import {SprintsEditComponent} from "../sprints-edit/sprints-edit.component";
import {SprintsDetailsComponent} from "../sprints-details/sprints-details.component";

const sprintsRoutes: Routes = [
  {
    path: '',
    component: SprintsComponent,

    children: [
      {
        path: '',
        component: SprintsListComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit',
        component: SprintsEditComponent
      },
      {
        path: 'edit/:id',
        component: SprintsEditComponent
      },
      {
        path: ':id',
        component: SprintsDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(sprintsRoutes)],
  exports: [RouterModule]
})
export class SprintsRoutingModule {

}
