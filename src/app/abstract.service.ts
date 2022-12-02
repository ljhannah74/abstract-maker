import { Injectable } from '@angular/core';
import { TitleAbstract } from './abstract';
import { Deed } from './deed';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private abstractsUrl = 'api/abstracts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getAbstracts(): Observable<TitleAbstract[]> {
    return this.http.get<TitleAbstract[]>(this.abstractsUrl)
      .pipe(catchError(this.handleError<TitleAbstract[]>('getAbstracts', [])))
  }

  getAbstract(id: number): Observable<TitleAbstract> {
    const url = `${this.abstractsUrl}/${id}`;
    return this.http.get<TitleAbstract>(url)
      .pipe(catchError(this.handleError<TitleAbstract>(`getAbstract id=${id}`)))
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
  return (error: HttpErrorResponse): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    this.messageService.add(error.message); 

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
