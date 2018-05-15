import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../config';

@Injectable()
export class SubjectService {
  BASE_URL = 'http://localhost:8000/subjects';

  constructor(private _http: HttpClient) { }

  getSubjects() {
    return this._http.get<Subject[]>(this.BASE_URL)
      
  }

  postSubject(subject: Subject) {
    return this._http.post(this.BASE_URL, subject)
    
  }

}
