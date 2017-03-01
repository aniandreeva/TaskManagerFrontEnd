import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TasksRoutingModule} from "./tasks-routing.module";

import {TasksService} from "../services/tasks.service";

import {TasksComponent} from "../tasks.component";
import {TasksListComponent} from "../tasks-list/tasks-list.component";
import {TasksEditComponent} from "../tasks-edit/tasks-edit.component";
import {TasksDetailsComponent} from "../tasks-details/tasks-details.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  declarations: [
    TasksComponent,
    TasksListComponent,
    TasksEditComponent,
    TasksDetailsComponent
  ],
  providers: [
    TasksService
  ]
})
export class TasksModule {

}
