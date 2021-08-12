import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) { }
  httpRequestService(): Observable<Object> {
    let url = 'http://localhost:3000/questions';
    return this.http.get(url);
  }
}
