import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SprintsRoutingModule} from "./sprints-routing.module";

import {SprintsService} from "../services/sprints.service";

import {SprintsComponent} from "../sprints.component";
import {SprintsListComponent} from "../sprints-list/sprints-list.component";
import {SprintsDetailsComponent} from "../sprints-details/sprints-details.component";
import {SprintsEditComponent} from "../sprints-edit/sprints-edit.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SprintsRoutingModule
  ],
  declarations: [
    SprintsComponent,
    SprintsListComponent,
    SprintsEditComponent,
    SprintsDetailsComponent
  ],
  providers: [
    SprintsService
  ]
})
export class SprintsModule {

}
