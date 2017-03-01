import {Injectable} from "@angular/core";
import {CrudService} from "../../core/services/crud.service";
import {Sprint} from "../models/sprint.model";
import {Http} from "@angular/http";

@Injectable()
export class SprintsService extends CrudService<Sprint> {
  constructor(protected http: Http) {
    super(http, '/sprints');
  }
}
