import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from "./app-routing.module";
import {UsersModule} from "./users/modules/users.module";
import {TasksModule} from "./tasks/modules/tasks.module";
import {SprintsModule} from "./sprints/modules/sprints.module";

import {AppComponent} from './app.component';
import {NavigationComponent} from "./shared/navigation.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    UsersModule,
    TasksModule,
    SprintsModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
