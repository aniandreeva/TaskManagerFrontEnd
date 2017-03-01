import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../services/users.service";
import {TasksService} from "../../tasks/services/tasks.service";

import {User} from "../models/user.model";
import {Task} from "../../tasks/models/task.model";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html'
})
export class UsersDetailsComponent implements OnInit {

  user: User;
  tasks: Task[];

  constructor(private usersService: UsersService,
              private tasksService: TasksService,
              private route: ActivatedRoute) {
    this.user = new User();
    this.tasks = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];

      this.usersService.getById(id).then(
        (data) => {
          this.user = data;

          this.tasksService.getByUserId(this.user.ID).then(
            (data) => {
              this.tasks = data;
            });
        });
    });
  }

}
