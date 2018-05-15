import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  Course } from '../config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class CourseService {
  
  BASE_URL = 'http://localhost:8000/courses';

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get<Course[]>(this.BASE_URL)
      
  }

  postData(course: Course) {
    return this._http.post(this.BASE_URL, course)
    
  }

 

}


