import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Student, BatchStudent } from '../config';

@Component({

  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];
  studentFlag: boolean;
  addStudentFlag: boolean;
  courseId: number;
  batchId: number;
  allStudents: Student[];

  constructor(private studentService: StudentService, private _route: ActivatedRoute,
    private _router: Router) {
    this.students = [];
    this.studentFlag = false;
    this.addStudentFlag = false;
    this.allStudents = [];
  }

  ngOnInit(): void {
    this.courseId = +this._route.snapshot.paramMap.get('id');
    this.batchId = +this._route.snapshot.paramMap.get('batchId');

    this.studentService.getStudents()
      .subscribe(students => this.students = students)
    this.studentService.getStudents()
      .subscribe(students => this.allStudents = students)
  }

  displayStudents(): void {
    this.studentFlag = true;
    this.addStudentFlag = false;

  }

  displayForm(): void {
    this.addStudentFlag = true;
    this.studentFlag = false;

  }

  enrollStudent(event: any): void {

    let studentId: number = +event.target.id;

    const batchStudent: BatchStudent = {
      batchId: this.batchId,
      studentId: studentId
    };
    this.studentService.postEnrollStudent(batchStudent)
      .subscribe((event: any) => {
        if (event.error) {
          alert('Already enrolled in this batch.');
        } else {
          alert('Student successfully enrolled into this batch.');
          this.studentService.getBatchStudents(this.courseId, this.batchId)
            .subscribe(students => this.students = students,
              error => console.log(<any>error));
        }
        console.log(event);
      })
  }




}
