import {BaseModel} from "../../core/models/base.model";

export class Task extends BaseModel{
  Title: string;
  Description: string;
  IsComplete: boolean;
  UserID?: number;
  SprintID?: number;
}
