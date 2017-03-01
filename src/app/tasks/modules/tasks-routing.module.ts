import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {TasksComponent} from "../tasks.component";
import {TasksListComponent} from "../tasks-list/tasks-list.component";
import {TasksEditComponent} from "../tasks-edit/tasks-edit.component";
import {TasksDetailsComponent} from "../tasks-details/tasks-details.component";

const tasksRoutes: Routes = [
  {
    path: '',
    component: TasksComponent,

    children: [
      {
        path: '',
        component: TasksListComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit',
        component: TasksEditComponent
      },
      {
        path: 'edit/:id',
        component: TasksEditComponent
      },
      {
        path: ':id',
        component: TasksDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(tasksRoutes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {

}
