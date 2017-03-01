import {BaseModel} from "../../core/models/base.model";

export class User extends BaseModel{
  Name: string;
  Email: string;
  Password: string;
}
