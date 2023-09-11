import { Component } from '@angular/core';
import { CourseDTO } from 'src/app/interfaces';
import { CourseService } from 'src/app/services/course.service';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-course-list',
  templateUrl: './admin-course-list.component.html',
  styleUrls: ['./admin-course-list.component.css']
})
export class AdminCourseListComponent {
  courses: CourseDTO[] = [];
  course1:CourseDTO=new CourseDTO();
  coursecodes: number[] = [101, 102, 103, 104, 105, 106, 107, 108];
  titles: string[] = ["JAVA", "Python", "C++" , "SQL" , "Angular" ,"Springboot"];
  durations: string[] = ["1 week", "2 week", "3 week", "4 week"];
  instructornames : string[] = ["John", "Sarah", "Michael", "Josh"];

  selectedCourse: CourseDTO = {
    id: 0,
    coursecode: 0,
    title: '',
    description: '',
    duration: '',
    startDate: '',
    endDate: '',
    instructorname: ''
  }

  constructor(
    private courseService: CourseService,
    private alert: AlertService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.courseService.getAll().subscribe(res => {
      this.courses = res as any[];
    })
  }

  onUpdateClick(data: CourseDTO) {
    this.selectedCourse = { ...data };
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: CourseDTO = { ...ngForm.form.value, id: this.selectedCourse.id };
    if (credentials.startDate >= credentials.endDate) {
      this.alert.error("Start date must be before end date");
      return;
  }
    
    this.api.put(`/api/course/update/${credentials.id}`, credentials).subscribe((res: any) => {
      this.alert.success('Update Successful.')
      ngForm.resetForm();
      window.location.reload();
    }, this.alert.apiFail);
  }

  onDelete(Id: number) {
    // this.auth.deleteStudent(studentId, () => {
      
    //   this.alert.success('delete successful.');
    //   window.location.reload();
     
    // })
    this.api.delete(`/api/course/delete/${Id}`).subscribe(res => {
      this.alert.success('delete successful.');
      window.location.reload();
      
      
    },this.alert.apiFail4);
  }
}
