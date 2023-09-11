import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginDTO } from 'src/app/interfaces';

import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {

  constructor(private alert: AlertService,
    private auth: AuthService
  ) { }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: LoginDTO = ngForm.form.value;
    this.auth.loginStudent(credentials);

  }
}
