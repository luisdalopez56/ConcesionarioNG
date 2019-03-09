import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getCars(): Observable<any> {
    return this.http.get(endpoint + 'cars').pipe(
      map(this.extractData));
  }

  getCarsById(id): Observable<any> {
    return this.http.get(endpoint + 'cars/' + id).pipe(
      map(this.extractData));
  }

  addCar(car): Observable<any> {
    console.log(car);
    return this.http.post<any>(endpoint + 'cars', JSON.stringify(car), httpOptions).pipe(
      tap((cars) => console.log(`added car w/ id=${car.id}`)),
      catchError(this.handleError<any>('addCar'))
    );
  }

  updateCar(id, car): Observable<any> {
    return this.http.put(endpoint + 'cars/' + id, JSON.stringify(car), httpOptions).pipe(
      tap(_ => console.log(`updated car id=${id}`)),
      catchError(this.handleError<any>('updateCar'))
    );
  }

  deleteCar(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'cars/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted car id=${id}`)),
      catchError(this.handleError<any>('deleteCar'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
