import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {CrudService} from "../../core/services/crud.service";
import {User} from "../models/user.model";

@Injectable()
export class UsersService extends CrudService<User>{

  constructor(protected http: Http) {
    super(http, '/users');
  }
}
