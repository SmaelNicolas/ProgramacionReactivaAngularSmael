import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(private http: HttpClient) {}

  getDataApiObservable(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=c9c649f8dc1856154cf88a683b935a6e'
    );
  }

  doFetch(url: any): Observable<any> {
    return this.http.get(url);
  }
}
