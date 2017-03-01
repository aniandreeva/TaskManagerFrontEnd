import {BaseModel} from "../../core/models/base.model";

export class Sprint extends BaseModel {
  StartDate: Date;
  EndDate: Date;
  Description: string;
}
