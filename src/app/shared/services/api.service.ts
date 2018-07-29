import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Trip } from '../../shared';


@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  private getCredentials() {
    // base64 encoding required
    return btoa(environment.DB_KEY+':'+environment.DB_PASSWORD);
  }

  private setHeaders(): HttpHeaders {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Basic ${this.getCredentials()}`
    };

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }

  post(body: Object = {}): Observable<any> { 
    console.log("Trip", body, environment.DB_API_URL);
    console.log('environment.DB_API_URL ' + environment.DB_API_URL);
    return this.http.post(`${environment.DB_API_URL}/travelapp/`, JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors);
        //.map((res:Response) => res);
  }

  get(path: string, params: {}): Observable<any> {
    return this.http.get(`${environment.DB_API_URL}${path}`, { headers: this.setHeaders(), params: new HttpParams(params)})
      .catch(this.formatErrors)
      .map((res:Response) => res);
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put( `${environment.DB_API_URL}${path}`, JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors)
        .map((res:Response) => res);
  }

  delete(trip : Trip): Observable<any> {
    console.log('##########################')
    console.log('###       DELETE       ###')
    console.log('##########################')
    console.log('should delete the following id ' + trip._id);
    console.log('should delete the following revision ' + trip._rev);
    let path = trip._id + '?rev=' + trip._rev;
   return this.http.delete(`${environment.DB_API_URL}/travelapp/${path}`, { headers: this.setHeaders() })
    .catch(this.formatErrors)
    //.map((res:Response) => res.json());
}

}