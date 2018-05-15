import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Batch } from '../config';
import { BatchService } from './batch.service';

@Component({
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  courseId: number;
  pageTitle: string;
  batches: Batch[];
 
  
  batchFlag: boolean;
  addBatchFlag: boolean;
  

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _batchService: BatchService) {

    this.pageTitle = 'View Batches';
    this.batches = [];
    
    this.batchFlag = true;
    this.addBatchFlag = false;
    
  }

  ngOnInit(): void {
    this.courseId = +this._route.snapshot.paramMap.get('id');
    this._batchService.getData(this.courseId)
      .subscribe(batches => this.batches = batches,
        error => console.log(<any>error));
  }

  displayBatches(): void {
    this.batchFlag = true;
    this.addBatchFlag = false;
   
   
  }

  displayForm(): void {
    this.addBatchFlag = true;
    this.batchFlag = false;
   
    
  }

  addBatch(name: string): void {
    if (!name) {
      alert("Enter valid batch name");
    } else {
      const batch: Batch = {
        name: name,
        courseId: this.courseId
      };
      this._batchService.postData(batch, this.courseId)
          .subscribe((event: Batch) => {
            alert('Batch added successfully.')
            this.batches.push(event);
            console.log(event);
          })
    }
  }

}
