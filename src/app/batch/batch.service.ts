import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Batch } from '../config';
import { Observable } from 'rxjs/Observable';
import { IfObservable } from 'rxjs/observable/IfObservable';

@Injectable()
export class BatchService {

  COURSE = 'http://localhost:8000/courses';
  BATCH = 'http://localhost:8000/batches';

  constructor(private _http: HttpClient) { }

  getData(id: number) {
    return this._http.get<Batch[]>(`${this.COURSE}/${id}/batches`)
		
  }

  getAllData() {
    return this._http.get<Batch[]>(this.BATCH);
		
  }

  postData(batch: Batch, id: number) {
    return this._http.post(this.BATCH, batch)
    
  }

  

}
