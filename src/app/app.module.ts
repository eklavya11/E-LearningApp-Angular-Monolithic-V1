import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './pages/student-login/student-login.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { BasicComponent } from './pages/layouts/basic/basic.component';

import { StudentComponent } from './pages/layouts/student/student.component';

import { CoursesComponent } from './pages/courses/courses.component';
import { StudentCoursesComponent } from './pages/student-courses/student-courses.component';

import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminCourseListComponent } from './pages/admin-course-list/admin-course-list.component';
import { AdminNewCourseComponent } from './pages/admin-new-course/admin-new-course.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';
import { AdminStudentListComponent } from './pages/admin-student-list/admin-student-list.component';

import { ScheduleComponent } from './pages/schedule/schedule.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { TestComponent } from './pages/test/test.component';
import { TestListComponent } from './pages/test-list/test-list.component';
import { AdminTestListComponent } from './pages/admin-test-list/admin-test-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    HomeComponent,
    BasicComponent,
    
    StudentComponent,
    
    CoursesComponent,
    StudentCoursesComponent,
    
    StudentProfileComponent,
         AdminLoginComponent,
         AdminCourseListComponent,
         AdminNewCourseComponent,
         AdminComponent,
         AdminRegisterComponent,
         AdminStudentListComponent,
         
         ScheduleComponent,
         AdminProfileComponent,
         TestComponent,
         TestListComponent,
         AdminTestListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    BrowserAnimationsModule
  ],
  providers: [
    AlertService,
    ApiService,
    AuthService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
