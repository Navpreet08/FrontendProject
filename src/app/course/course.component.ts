import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   courses: Course[];
   courseFlag: boolean;
   addCourseFlag: boolean;

  constructor(private _courseService: CourseService,private _route: ActivatedRoute,
    private _router: Router) {
    this.courses = [];
    this.courseFlag = false;
    this.addCourseFlag = false;

  }

  ngOnInit(): void {
    this._courseService.getData()
      .subscribe(courses => this.courses = courses)
  }

  displayCourses(): void {
    this.courseFlag = true;
    this.addCourseFlag = false;

  }

  displayForm(): void {
    this.addCourseFlag = true;
    this.courseFlag = false;

  }

  addCourse(name: string): void {
    if (!name) {
      alert("Enter valid course name");
    } else {
      const course: Course = {
        name: name
      };
      this._courseService.postData(course)
        .subscribe((event: Course) => {
          alert('Course added successfully.')

          this.courses.push(event);
          console.log(event);
        })
    }
  }

}


