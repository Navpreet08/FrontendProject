import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CourseService } from './course/course.service';
import { BatchComponent } from './batch/batch.component';
import { BatchService } from './batch/batch.service';
import { LectureComponent } from './lecture/lecture.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherService } from './teacher/teacher.service';
import { LectureService } from './lecture/lecture.service';
import { SubjectComponent } from './subject/subject.component';
import { SubjectService } from './subject/subject.service';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student/student.service';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { SingleStudentComponent } from './single-student/single-student.component';

const appRoutes: Routes = [
  {path: 'courses', component: CourseComponent},
  {path: 'teachers', component: TeacherComponent},
  {path: 'subjects', component: SubjectComponent},
  {path: 'students', component: StudentDashboardComponent},
  {path: 'students/:id', component: SingleStudentComponent},
  {path: 'courses/:id/batches', component: BatchComponent},
  {path: 'courses/:id/batches/:batchId/lectures',component:LectureComponent},
  {path: 'courses/:id/batches/:batchId/students',component:StudentComponent},
  {path: '', component: FrontpageComponent}
  

];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FrontpageComponent,
    BatchComponent,
    LectureComponent,
    TeacherComponent,
    SubjectComponent,
    StudentComponent,
    StudentDashboardComponent,
    SingleStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [CourseService,BatchService,TeacherService,LectureService,SubjectService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }


