import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers, Response, RequestMethod } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class OfficeTablesService {
  myHeaders = new Headers({ 'X-Token': '13263be2-dca3-4ef6-8c9e-2b86c6e4df97' });
  options = new RequestOptions({ headers: this.myHeaders });

  constructor(private http: Http) { }

  getOffices(): Observable<Response> {
    return this.http.get(environment.officesUrlMock, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  
  createOffice(office: any): Observable<Response> {
    return this.http.post(environment.officesUrlRami, office, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteOffice(officeId: any): Observable<Response> {
    // tslint:disable-next-line:prefer-template
    return this.http.delete(environment.officesUrlRami + '/' + officeId, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  putOffice(office: any): Observable<Response> {
    const officeId = office.id;
    // tslint:disable-next-line:prefer-template    
    return this.http.put(environment.officesUrlRami + '/' + officeId, office, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    return Observable.throw(errMsg);
  }
}
