import {Http} from "@angular/http";
import {AppSettings} from "../../../app.settings";

export abstract class BaseService {

  constructor(protected http: Http, private collection: string) { }

  protected buildUrl(options?: RequestOptions): string {
    options = options || {};

    let endPointToUse = options.endPoint || AppSettings.ApiEndPoint;
    let uriToUse = options.uri || '';
    let collectionToUse = options.collection || this.collection;

    return endPointToUse + uriToUse + collectionToUse;
  }
}

interface RequestOptions {
  endPoint?: string,
  uri?: string,
  collection?: string
}
