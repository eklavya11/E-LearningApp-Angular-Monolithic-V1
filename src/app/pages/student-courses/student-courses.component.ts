import { Component } from '@angular/core';
import { CourseDTO, StudentRegisterDTO } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';




@Component({
  selector: 'student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent  {
  public currentLoggedInUser: StudentRegisterDTO | undefined; 
  public courses: CourseDTO[] = [];

  constructor(
    private auth: AuthService,
    private courseService:CourseService
   
  ) { }

  ngOnInit() {
    this.auth.getLoggedInStudent().subscribe(res => {
      this.currentLoggedInUser = res as StudentRegisterDTO;
      sessionStorage.setItem('LOGGED_IN_USER_DETAILS', JSON.stringify(res));
      this.courseService.getMyCourses(this.currentLoggedInUser.id).subscribe(res => {
        this.courses = res as any[];
      });
    });
    
  }

  Unenroll(data: CourseDTO) {
    if (this.currentLoggedInUser) {
    this.courseService.removeCourseFromStudent(this.currentLoggedInUser?.id,data);
    }
  }

  

}
