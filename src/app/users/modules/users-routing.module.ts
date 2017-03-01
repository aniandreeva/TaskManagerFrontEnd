import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UsersListComponent} from "../users-list/users-list.component";
import {UsersEditComponent} from "../users-edit/users-edit.component";
import {UsersDetailsComponent} from "../users-details/users-details.component";
import {UsersComponent} from "../users.component";

const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,

    children: [
      {
        path: '',
        component: UsersListComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit',
        component: UsersEditComponent
      },
      {
        path: 'edit/:id',
        component: UsersEditComponent
      },
      {
        path: ':id',
        component: UsersDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
