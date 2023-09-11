import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { BasicComponent } from './pages/layouts/basic/basic.component';
import { StudentLoginComponent } from "./pages/student-login/student-login.component";
import { StudentRegisterComponent } from './pages/student-register/student-register.component';

import { StudentComponent } from './pages/layouts/student/student.component';

import { AuthGuard } from './guards/auth.guard';
import { StudentGuard } from './guards/student.guard';
import { AdminGuard } from './guards/admin.guard';


import { StudentCoursesComponent } from './pages/student-courses/student-courses.component';
import { CoursesComponent } from './pages/courses/courses.component';

import { AdminComponent } from './pages/layouts/admin/admin.component';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';

import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminNewCourseComponent } from './pages/admin-new-course/admin-new-course.component';
import { AdminCourseListComponent } from './pages/admin-course-list/admin-course-list.component';
import { AdminStudentListComponent } from './pages/admin-student-list/admin-student-list.component';
import { TestComponent } from './pages/test/test.component';
import { AdminTestListComponent } from './pages/admin-test-list/admin-test-list.component';
import { TestListComponent } from './pages/test-list/test-list.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';

const routes: Routes = [

  {
    path: '',
    component: BasicComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeComponent
      },

      {
        path: 'student-login',
        component: StudentLoginComponent
      },
      {
        path: 'student-register',
        component: StudentRegisterComponent
      },
      {
        path: 'admin-login',
        component: AdminLoginComponent
      },
      
     
      

    ]
  },
  {
    path: 'student',
    component: StudentComponent,
    canActivate: [AuthGuard, StudentGuard],
    canActivateChild: [AuthGuard, StudentGuard],
    children: [
      {
        path: '',
        component: StudentProfileComponent
      },
      {
        path: 'my-courses',
        component: StudentCoursesComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'schedule',
        component: ScheduleComponent

      },
      {
        path: 'test-list',
        component:TestListComponent
      },

      {
        path: 'profile',
        component: StudentProfileComponent
      },
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    canActivateChild: [AuthGuard, AdminGuard],
    children: [
     
      {
        path: 'admin-profile',
        component: AdminProfileComponent
      },
      {
        path: 'student-list',
        component: AdminStudentListComponent
      },
      {
        path: 'courselist',
        component: AdminCourseListComponent
      },
      
      {
        path: 'new-course',
        component: AdminNewCourseComponent
      },
      { path:'new-test',
        component: TestComponent

      },
      { path:'admin-tests',
        component: AdminTestListComponent

      },
      {
        path: 'admin-register',
        component: AdminRegisterComponent
      },
      {
        path: '',
        component: AdminProfileComponent
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
