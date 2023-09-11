import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  StudentRegisterDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

import { ApiService } from 'src/app/services/api.service';
import { FormControl, Validators } from '@angular/forms';






@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {

  
  student: StudentRegisterDTO = new StudentRegisterDTO();

  
  pwd = "";
  confirmpwd = "";
 

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private auth: AuthService
    
  ) { }

  ngOnInit() {
   
  } 

  

 

  onSubmit(ngForm: NgForm) {

    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    

    
    const credentials: StudentRegisterDTO = ngForm.form.value;


    

    this.api.post('/student/register-student', credentials).subscribe((res: any) => {
      this.alert.success('Registration successful.')
      ngForm.resetForm();
    }, this.alert.apiFail);
   
    
    
    
    // ngForm.resetForm();

  }

  

}
