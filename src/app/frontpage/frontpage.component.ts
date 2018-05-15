import { Component, OnInit } from '@angular/core';
import { Batch } from '../config';
import { BatchService } from '../batch/batch.service';

@Component({
  
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  
  batches: Batch[];
  

  constructor(private batchService: BatchService) {
   
    this.batches = [];
   
  }

  ngOnInit(): void {
    this.batchService.getAllData()
      .subscribe(batches => this.batches = batches
      )

    }

}
