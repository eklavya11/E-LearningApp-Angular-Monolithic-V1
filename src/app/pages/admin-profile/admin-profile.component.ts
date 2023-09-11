import { Component } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AdminRegisterDTO } from 'src/app/interfaces';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {

  public currentLoggedInUser: any;

  constructor(
    private alert: AlertService,
    private auth: AuthService,
    
  ) { }

  ngOnInit() {
    
    this.auth.getLoggedInAdmin().subscribe(res => {
      this.currentLoggedInUser = res as AdminRegisterDTO;
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

    

    this.auth.updateAdmin(this.currentLoggedInUser, () => {
      this.ngOnInit();
    });


  }

}
