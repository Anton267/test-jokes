import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly url = 'http://api.icndb.com/jokes/';

  public getJoke(): Observable<any> {
    return this.http.get(this.url);
  }

  public getJokeById(id: number | string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
