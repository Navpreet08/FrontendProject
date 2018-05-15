import { Component, OnInit } from '@angular/core';
import { Teacher, Subject } from '../config';
import { TeacherService } from './teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../subject/subject.service';

@Component({

  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[];
  subjects: Subject[];
  teacherFlag: boolean;
  subjectId: number;
  
  addTeacherFlag: boolean;

  constructor(private _route: ActivatedRoute,
    private router: Router,
    private subjectService: SubjectService,
    private teacherService: TeacherService) {
    this.teachers = [];
    this.subjects=[];
    this.subjectId = 0;
    this.teacherFlag = false;
    this.addTeacherFlag = false;

  }

  ngOnInit(): void {
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers)


      this.subjectService.getSubjects()
      .subscribe(subjects => this.subjects = subjects)   
  }


  onChangeSubject(event: any) {
    this.subjectId = +event.target.value;
  }
  
  displayTeachers(): void {
    this.teacherFlag = true;
    this.addTeacherFlag = false;

  }

  displayForm(): void {
    this.addTeacherFlag = true;
    this.teacherFlag = false;

  }
  
   addTeacher(name: string) {
     if (!name) {
       alert("Enter valid teacher name");
     } else {
       const teacher: Teacher = {
         name: name,
         subjectId: this.subjectId
       };
       this.teacherService.postTeacher(teacher)
         .subscribe((event: Teacher) => {
           alert('Teacher added successfully.')
   this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers)
         })
     }
   }
  
}
