import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers, Response, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class AtmTablesService {

    constructor(private http: Http) { }

    getBanks(): Observable<Response> {
        const myHeaders = new Headers({ 'X-Token': '13263be2-dca3-4ef6-8c9e-2b86c6e4df97' });
        const options: RequestOptionsArgs = { headers: myHeaders };

        return this.http.get(environment.officesUrlMock, options)
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
