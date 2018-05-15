import { Injectable } from '@angular/core';
import { Student, BatchStudent } from '../config';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentService {

  URL = 'http://localhost:8000/students';
  URL_BATCH = 'http://localhost:8000/batches';
  URL_BATCH_STUDENTS = 'http://localhost:8000/courses';

  constructor(private _http: HttpClient) { }

  getStudents() {
    return this._http.get<Student[]>(this.URL)
  }

  getBatchStudents(id: number, batchId: number) {
    return this._http.get<Student[]>(`${this.URL_BATCH_STUDENTS}/${id}/batches/${batchId}/students`)
  }

  getStudent(id: number) {
    return this._http.get<Student>(`${this.URL}/${id}`)
  }

  postStudent(student: Student) {
    return this._http.post(this.URL, student)
  }

  postEnrollStudent(batchStudent: BatchStudent) {
    return this._http.post(`${this.URL_BATCH}/students`, batchStudent)
  }

 

}
