import { Component, OnInit } from '@angular/core';
import { Student } from '../config';
import { StudentService } from '../student/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  students: Student[];
  studentFlag: boolean;
  addStudentFlag: boolean;

 constructor(private studentService: StudentService,private _route: ActivatedRoute,
   private _router: Router) {
   this.students = [];
   this.studentFlag = false;
   this.addStudentFlag = false;

 }

 ngOnInit(): void {
   this.studentService.getStudents()
     .subscribe(students => this.students = students)
 }

 displayStudents(): void {
   this.studentFlag = true;
   this.addStudentFlag = false;

 }

 displayForm(): void {
   this.addStudentFlag = true;
   this.studentFlag = false;

 }

 addStudent(name: string): void {
   if (!name) {
     alert("Enter valid student name");
   } else {
     const student: Student = {
       name: name
     };
     this.studentService.postStudent(student)
       .subscribe((event: Student) => {
         alert('Student added successfully.')

         this.students.push(event);
         console.log(event);
       })
   }
 }

}
