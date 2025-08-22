import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poll } from './poll.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private baseUrl = 'http://localhost:8080/api/polls';

  constructor(private http: HttpClient){}

  createPoll(poll: Poll):Observable<Poll>{
    return this.http.post<Poll>(this.baseUrl, poll);
  }
  
}
