import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm for form handling
import { AlertService } from 'src/app/services/alert.service';
import { TestDTO } from 'src/app/interfaces';
import { TestService } from 'src/app/services/test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  titles: string[] = ["JAVA", "Python", "C++" , "SQL" , "Angular" ,"Springboot"];
  durations: string[] = ["30 minutes", "1 hour", "2 hour", "3 hour"];
  markss: number[] =[20,40,50,60,80,100];
  constructor(private test: TestService, private alert: AlertService) { }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: TestDTO = { ...ngForm.form.value, id: 0 };
    this.test.create(credentials);
    ngForm.resetForm();

  }
}







 