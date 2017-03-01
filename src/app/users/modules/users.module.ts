import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {UsersService} from "../services/users.service";

import {UsersListComponent} from "../users-list/users-list.component";
import {UsersEditComponent} from "../users-edit/users-edit.component";
import {UsersDetailsComponent} from "../users-details/users-details.component";
import {UsersRoutingModule} from "./users-routing.module";
import {UsersComponent} from "../users.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    UsersListComponent,
    UsersEditComponent,
    UsersDetailsComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {

}
