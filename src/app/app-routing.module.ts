import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: 'app/users/modules/users.module#UsersModule'
  },
  {
    path: 'tasks',
    loadChildren: 'app/tasks/modules/tasks.module#TasksModule'
  },
  {
    path: 'sprints',
    loadChildren: 'app/sprints/modules/sprints.module#SprintsModule'
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
