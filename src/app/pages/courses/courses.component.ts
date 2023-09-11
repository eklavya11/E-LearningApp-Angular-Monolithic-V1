import { Component } from '@angular/core';
import { CourseDTO,StudentRegisterDTO  } from 'src/app/interfaces';
import { CourseService } from 'src/app/services/course.service';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';




@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  public currentLoggedInUser: StudentRegisterDTO | undefined;
  courses: CourseDTO[] = [];
  constructor(
    private courseService: CourseService,
    private alert: AlertService,
    private auth: AuthService,
    private api:ApiService
   
  ) { }

  ngOnInit() {
    this.courseService.getAll().subscribe(res => {
      this.courses = res as any[];
    });
    this.auth.getLoggedInStudent().subscribe(res => {
      this.currentLoggedInUser = res as StudentRegisterDTO;
      sessionStorage.setItem('LOGGED_IN_USER_DETAILS', JSON.stringify(res));
      
    });
    
  }

  enrollCourse(course: CourseDTO) { 

    
   
    if (this.currentLoggedInUser) {
       this.courseService.addCourseToStudent(this.currentLoggedInUser?.id, course);
      
        
      }
      
    }
      
    
   

  }

  

  

