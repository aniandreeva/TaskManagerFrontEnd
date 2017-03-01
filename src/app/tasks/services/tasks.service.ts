import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {CrudService} from "../../core/services/crud.service";
import {Task} from "../models/task.model";


@Injectable()
export class TasksService extends CrudService<Task>{

  constructor(protected http: Http) {
    super(http, '/tasks');
  }

  public getByUserId(userId: number): Promise<Task[]> {
    return this.http.get(this.buildUrl({uri: '/users/' + userId})).toPromise().then(data => data.json());
  }

  public getBySprintId(sprintId: number): Promise<Task[]> {
    return this.http.get(this.buildUrl({uri: '/sprints/' + sprintId})).toPromise().then(data => data.json());
  }
}
