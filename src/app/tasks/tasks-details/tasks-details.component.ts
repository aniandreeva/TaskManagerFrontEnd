import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {TasksService} from "../services/tasks.service";
import {UsersService} from "../../users/services/users.service";
import {SprintsService} from "../../sprints/services/sprints.service";

import {Task} from "../models/task.model";
import {User} from "../../users/models/user.model";
import {Sprint} from "../../sprints/models/sprint.model";

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html'
})
export class TasksDetailsComponent implements OnInit {

  task: Task;
  user: User;
  sprint: Sprint;

  constructor(private tasksService: TasksService,
              private usersService: UsersService,
              private sprintsService: SprintsService,
              private route: ActivatedRoute) {
    this.task = new Task();
    this.user = new User();
    this.sprint = new Sprint();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];

      this.tasksService.getById(id).then(
        (data) => {
          this.task = data;

          if(this.task.UserID) {
            this.usersService.getById(this.task.UserID).then(
              (data) => {
                this.user = data;
              }
            )
          }

          if(this.task.SprintID) {
            this.sprintsService.getById(this.task.SprintID).then(
              (data) => {
                this.sprint = data;
              }
            )
          }

          this.uniformStyles();

        });
    });
  }

  private uniformStyles() {
    $('input:checkbox').uniform();
  }

}
