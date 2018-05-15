import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Batch, Lecture, Teacher } from '../config';
import { BatchService } from '../batch/batch.service';
import { LectureService } from './lecture.service';
import { TeacherService } from '../teacher/teacher.service';

@Component({
  
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  courseId: number;
  batchId:number;
  subjectId: number;
  teacherId: number;
  
  lectures: Lecture[];
  teachers: Teacher[];
 
  
  lectureFlag: boolean;
  addLectureFlag: boolean;
  

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _lectureService: LectureService,
    private _teacherService: TeacherService) {

   
    this.lectures = [];
    this.teachers = [];
    this.lectureFlag = true;
    this.addLectureFlag = false;
    this.subjectId = 0;
    this.teacherId = 0;
    
  }

  ngOnInit() {
    this.courseId = +this._route.snapshot.paramMap.get('id');
    this.batchId = +this._route.snapshot.paramMap.get('batchId');
    
    this._lectureService.getLectures(this.courseId,this.batchId)
      .subscribe(lectures => this.lectures = lectures)
     
      this._teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers)   
  }

  displayLectures(): void {
    this.lectureFlag = true;
    this.addLectureFlag = false;
   
   
  }

  displayForm(): void {
    this.addLectureFlag = true;
    this.lectureFlag = false;
   
    
  }

  onChangeTeacher(event: any) {
    this.teacherId = +event.target.value;
    for (let i = 0; i <= this.teachers.length; i++) {
      if (this.teachers[i].id === this.teacherId) {
        this.subjectId = this.teachers[i].subjectId;
        break;
      }
    }
  }

  addLecture(name: string) {
    if (!name) {
      alert("Enter valid lecture name");
    } else {
      const lecture: Lecture = {
        name: name,
         batchId: this.batchId,
        subjectId: this.subjectId,
        teacherId: this.teacherId
      };
     this._lectureService.postLecture(lecture)
        .subscribe((event: Lecture) => {
          alert('Lecture added successfully.')
         
          this._lectureService.getLectures(this.courseId, this.batchId)
            .subscribe(lectures => this.lectures = lectures)
            
          
        })
    }
  }

}
