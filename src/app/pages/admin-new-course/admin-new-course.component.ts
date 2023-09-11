import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm } from '@angular/forms';
import { CourseDTO } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-new-course',
  templateUrl: './admin-new-course.component.html',
  styleUrls: ['./admin-new-course.component.css']
})
export class AdminNewCourseComponent {

  course1:CourseDTO=new CourseDTO();

  coursecodes: number[] = [101, 102, 103, 104, 105, 106, 107, 108];
  titles: string[] = ["JAVA", "Python", "C++" , "SQL" , "Angular" ,"Springboot"];
  durations: string[] = ["1 week", "2 week", "3 week", "4 week"];
  instructornames : string[] = ["John", "Sarah", "Michael", "Josh"];


  constructor(private course: CourseService, private alert: AlertService,private api: ApiService) { }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: CourseDTO = ngForm.form.value;
    // this.course.create(credentials);
    if (credentials.startDate >= credentials.endDate) {
            this.alert.error("Start date must be before end date");
            return;
        }
    this.api.post('/api/course/add', credentials).subscribe((res: any) => {
      this.alert.success('Successful.')
      ngForm.resetForm();
    }, this.alert.apiFail);

  }

  

 

    

   
 

 

 

 

}
