import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {TasksService} from "../services/tasks.service";
import {UsersService} from "../../users/services/users.service";
import {Task} from "../models/task.model";
import {User} from "../../users/models/user.model";
import {Sprint} from "../../sprints/models/sprint.model";
import {SprintsService} from "../../sprints/services/sprints.service";

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html'
})
export class TasksEditComponent implements OnInit {

  task: Task;
  user: User;
  users: User[];
  sprints: Sprint[];

  constructor(private tasksService: TasksService,
              private usersService: UsersService,
              private sprintsService: SprintsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.task = new Task();
    this.user = new User();
    this.users = [];
    this.sprints = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.usersService.getAll().then(users => {
        this.users = users;

        this.sprintsService.getAll().then(sprints => {
          this.sprints = sprints;

          let id = +params['id'];

          if (id) {
            this.tasksService.getById(id).then(
              (data) => {
                this.task = data;

                $('#users-list').val(this.task.UserID).trigger('change');
                $('#sprints-list').val(this.task.SprintID).trigger('change');
              });
          }
        });

        this.uniformStyles();
      });
    });
  }

  editTask() {
    this.task.UserID = $('#users-list').val();
    this.task.SprintID = $('#sprints-list').val();

    this.tasksService.save(this.task).then(() => {
      this.router.navigate(['tasks']);
    });
  }

  private uniformStyles() {
    $('input:checkbox').uniform();
    $('select').select2();
  }
}
