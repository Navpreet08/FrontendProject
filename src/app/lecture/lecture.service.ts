import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Batch, Lecture } from '../config';

@Injectable()
export class LectureService {

  COURSE = 'http://localhost:8000/courses';
  BATCH = 'http://localhost:8000/batches';
  LECTURE = 'http://localhost:8000/lectures';
  TEACHER = 'http://localhost:8000/teachers';


  constructor(private _http: HttpClient) { }

  getLectures(id: number, batchId: number) {
    return this._http.get<Lecture[]>(`${this.COURSE}/${id}/batches/${batchId}/lectures`)
      
  }

 
  postLecture(lecture: Lecture){
    return this._http.post(this.LECTURE, lecture)
   
  }


}
