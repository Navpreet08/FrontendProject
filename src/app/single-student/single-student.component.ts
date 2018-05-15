import { Component, OnInit } from '@angular/core';
import { BatchStudent, Batch, Student } from '../config';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student/student.service';
import { BatchService } from '../batch/batch.service';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {

  courseId: number;
  student: Student;
  batches: Batch[];
  batchId: number;
  studentId: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private batchService: BatchService) {

    this.student = null;
    this.batches = [];
    this.batchId = 0;
  }

  ngOnInit(): void {
    this.studentId = +this.route.snapshot.paramMap.get('id');

    this.studentService.getStudent(this.studentId)
      .subscribe(student => this.student = student,
        error => console.log(<any>error));

    this.batchService.getAllData()
      .subscribe(batches => this.batches = batches,
        error => console.log(<any>error));
  }


  onChangeBatch(event: any): void {
    this.batchId = +event.target.value;
  }

  addStudentToBatch(): void {
    const batchStudent: BatchStudent = {
      batchId: this.batchId,
     studentId: this.studentId
    };
    this.studentService.postEnrollStudent(batchStudent)
      .subscribe((event: any) => {
        if (event.error) {
          alert('Already enrolled in this batch.');
        } else {
          alert('Student successfully enrolled into this batch.');
        }
        console.log(event);
      })
  }


}
