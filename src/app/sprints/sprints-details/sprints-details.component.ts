import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SprintsService} from "../services/sprints.service";
import {TasksService} from "../../tasks/services/tasks.service";
import {Sprint} from "../models/sprint.model";
import {Task} from "../../tasks/models/task.model";

@Component({
  selector: 'app-sprints-details',
  templateUrl: './sprints-details.component.html'
})
export class SprintsDetailsComponent implements OnInit {

  sprint: Sprint;
  tasks: Task[];

  constructor(private sprintsService: SprintsService,
              private tasksService: TasksService,
              private route: ActivatedRoute) {
    this.sprint = new Sprint();
    this.tasks = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];

      this.sprintsService.getById(id).then(
        (data) => {
          this.sprint = data;
          this.sprint.StartDate = moment(data.StartDate).format('LL');
          this.sprint.EndDate = moment(data.EndDate).format('LL');

          this.tasksService.getBySprintId(this.sprint.ID).then(
            (data) => {
              this.tasks = data;
            });
        });
    });
  }

}
