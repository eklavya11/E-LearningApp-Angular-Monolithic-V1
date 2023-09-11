import { Component } from '@angular/core';
import { TestDTO } from 'src/app/interfaces';
import { TestService } from 'src/app/services/test.service';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-test-list',
  templateUrl: './admin-test-list.component.html',
  styleUrls: ['./admin-test-list.component.css']
})
export class AdminTestListComponent {
  public tests: TestDTO[] = [];
  titles: string[] = ["JAVA", "Python", "C++" , "SQL" , "Angular" ,"Springboot"];
  durations: string[] = ["30 minutes", "1 hour", "2 hour", "3 hour"];
  markss: number[] =[20,40,50,60,80,100];

  selectedTest: TestDTO ={
    id: 0,
    title: '',
    duration: '',
    marks: 0
  }


  constructor(
    private testService: TestService,
    private alert: AlertService,
    private api: ApiService
  ) { }
  ngOnInit() {
    this.testService.getAllTests().subscribe(res => {
      this.tests = res as any[];
    });
  }

  onUpdateClick(data: TestDTO) {
    this.selectedTest = { ...data };
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: TestDTO = { ...ngForm.form.value, id: this.selectedTest.id };
    
    
    this.api.put(`/api/test/update/${credentials.id}`, credentials).subscribe((res: any) => {
      this.alert.success('Update Successful.')
      ngForm.resetForm();
      window.location.reload();
    }, this.alert.apiFail);
  }

}
