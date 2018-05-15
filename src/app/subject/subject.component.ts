import { Component, OnInit } from '@angular/core';

import { SubjectService } from './subject.service';
import { Subject, Course } from '../config';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course/course.service';

@Component({
 
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: Subject[];
  courses: Course[];
  courseId:number;
  subjectFlag: boolean;
  addSubjectFlag: boolean;

 constructor(private _route: ActivatedRoute,
  private router: Router,
  private subjectService: SubjectService,
  private courseService: CourseService) {
   this.subjects = [];
   this.courses=[];
   this.courseId = 0;
   this.subjectFlag = false;
   this.addSubjectFlag = false;

 }

 ngOnInit(): void {
   this.subjectService.getSubjects()
     .subscribe(subjects => this.subjects = subjects)

     this.courseService.getData()
      .subscribe(courses => this.courses = courses)    
 }

 displaySubjects(): void {
   this.subjectFlag = true;
   this.addSubjectFlag = false;

 }

 onChangeCourse(event: any) {
  this.courseId = +event.target.value;
}

 displayForm(): void {
   this.addSubjectFlag = true;
   this.subjectFlag = false;

 }


addSubject(name: string) {
  if (!name) {
    alert("Enter valid subject name");
  } else {
    const subject: Subject = {
      name: name,
      courseId: this.courseId
    };
    this.subjectService.postSubject(subject)
      .subscribe((event: Subject) => {
        alert('Subjects added successfully.')
this.subjectService.getSubjects()
   .subscribe(subjects => this.subjects = subjects)
      })
  }
}


}
