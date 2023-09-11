import { Component } from '@angular/core';
import { CourseDTO } from 'src/app/interfaces';
import { CourseService } from 'src/app/services/course.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  courses: CourseDTO[] = [];
  constructor(
    private courseService: CourseService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.courseService.getAll().subscribe(res => {
      this.courses = res as any[];
    })
  }


}
