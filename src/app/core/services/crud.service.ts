import {Http} from "@angular/http";
import {BaseModel} from "../models/base.model";
import {BaseService} from "./base.service";

import 'rxjs/add/operator/toPromise';

export abstract class CrudService<T extends BaseModel> extends BaseService {

  constructor(protected http: Http, collection: string) {
    super(http, collection);
  }

  public getAll(): Promise<T[]> {
    return this.http.get(this.buildUrl()).toPromise().then(data => data.json());
  }

  public getById(id: number): Promise<T> {
    return this.http.get(this.buildUrl() +  '/' + id).toPromise().then(data => data.json());
  }

  public save(item: T): Promise<T> {
    if (!item.ID) {
      return this.create(item);
    }
    else {
      return this.update(item);
    }
  }

  private create(item: T): Promise<T> {
    return this.http.post(this.buildUrl(), item).toPromise().then(data=> data.json());
  }

  private update(item: T): Promise<T> {
    return this.http.put(this.buildUrl() + '/' + item.ID, item).toPromise().then(data=>data.json());
  }

  public delete(id: number): Promise<T> {
    return this.http.delete(this.buildUrl() + '/' + id).toPromise().then(data => data);
  }

}
