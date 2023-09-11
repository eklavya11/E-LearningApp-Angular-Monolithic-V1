import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentRegisterDTO} from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  
  public currentLoggedInUser: any;

  constructor(
    private alert: AlertService,
    private auth: AuthService,
    
  ) { }

  ngOnInit() {
    
    this.auth.getLoggedInStudent().subscribe(res => {
      this.currentLoggedInUser = res as StudentRegisterDTO;
      let userRef:any = res;
      userRef.password= "********************";
      sessionStorage.setItem('LOGGED_IN_USER_DETAILS', JSON.stringify(userRef));

    });

    
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm.form)
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }

    

    this.auth.updateStudent(this.currentLoggedInUser, () => {
      this.ngOnInit();
    });


  }

  

}
