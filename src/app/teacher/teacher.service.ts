import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../config';

@Injectable()
export class TeacherService {
  BASE_URL = 'http://localhost:8000/teachers';

  constructor(private _http: HttpClient) { }

  getTeachers() {
    return this._http.get<Teacher[]>(this.BASE_URL)
      
  }

  postTeacher(teacher: Teacher) {
    return this._http.post(this.BASE_URL, teacher)
    
  }


}
