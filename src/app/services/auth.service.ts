import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  StudentRegisterDTO, LoginDTO, AdminRegisterDTO } from '../interfaces';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private api: ApiService, private alert: AlertService, private router: Router) { }

  // registerCustomer(data: CustomerRegisterDTO) {
  //   console.log(JSON.stringify(data));
  //   this.api.post('/customer/insert-customer', data).subscribe((res: any) => {
  //     this.alert.success('Registration successful.')
  //   }, this.alert.apiFail);
  // }
  // registerAdmin(data: AdminRegisterDTO) {
  //   this.api.post('/admin/registeradmin', data).subscribe((res: any) => {
  //     this.alert.success('Registration successful.')
  //   }, this.alert.apiFail);
  // }

  loginStudent(data: LoginDTO) {
    this.api.post('/validate/student/login', data).subscribe((res: any) => {
      if (!res?.response?.email) {
        this.alert.error("Wrong credentials");
        return;
      }

      sessionStorage.setItem('SESSION_USERNAME', data.email);
      sessionStorage.setItem('SESSION_ROLE', 'STUDENT');
      sessionStorage.setItem('SESSION_USER_ID', res?.response?.id);
      this.router.navigateByUrl("/student")
    }, this.alert.apiFail1);
  }

  loginAdmin(data: LoginDTO) {
    this.api.post('/admin/validate/admin/login', data).subscribe((res: any) => {
      if (!res?.response?.email) {
        this.alert.error("Wrong credentials");
        return;
      }
      sessionStorage.setItem('SESSION_USERNAME', data.email);
      sessionStorage.setItem('SESSION_ROLE', 'ADMIN');
      sessionStorage.setItem('SESSION_USER_ID', res?.response?.id);
      this.router.navigateByUrl("/admin")
    }, this.alert.apiFail1);
  }

  isAdmin() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_ROLE') === 'ADMIN')
      return true;
    return false;
  }
  
  getLoggedInStudent() {
    if (sessionStorage.getItem("LOGGED_IN_USER_DETAILS")) {
      return new Observable((observer) => {
        try {
          const data = JSON.parse(sessionStorage.getItem("LOGGED_IN_USER_DETAILS") || '');
          observer.next(data);
        } catch (e) {
          observer.error(e);
        }
      })
    }
    const Id = sessionStorage.getItem('SESSION_USER_ID');
    return this.api.get(`/admin/view-student-by-id/${Id}`);
  }

  getLoggedInAdmin() {
    if (sessionStorage.getItem("LOGGED_IN_USER_DETAILS")) {
      return new Observable((observer) => {
        try {
          const data = JSON.parse(sessionStorage.getItem("LOGGED_IN_USER_DETAILS") || '');
          observer.next(data);
        } catch (e) {
          observer.error(e);
        }
      })
    }
    const Id = sessionStorage.getItem('SESSION_USER_ID');
    return this.api.get(`/admin/admin/view-admin-by-id/${Id}`);
  }

  updateStudent(credentials: StudentRegisterDTO, callback?: () => void) {
    this.api.put(`/student/update-student/${credentials.id}`, credentials).subscribe(res => {
      this.alert.success('Update successful.');
      let userRef:any = res;
      userRef.password= "";
      
      sessionStorage.setItem('LOGGED_IN_USER_DETAILS', JSON.stringify(userRef));
      if (callback) callback();
    });
  }

  updateAdmin(credentials: AdminRegisterDTO, callback?: () => void) {
    this.api.put(`/admin/update-admin/${credentials.id}`, credentials).subscribe(res => {
      this.alert.success('Update successful.');
      let userRef:any = res;
      userRef.password= "";
      
      sessionStorage.setItem('LOGGED_IN_USER_DETAILS', JSON.stringify(userRef));
      if (callback) callback();
    });
  }

  deleteStudent(Id: number, callback?: () => void) {
    this.api.delete(`/admin/delete-student/${Id}`).subscribe(res => {
      this.alert.success('delete successful.');
      window.location.reload();
      if (callback) callback();
      
    });
  }

  isLoggedIn() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_USERNAME'))
      return true;
    return false;
  }

  

  isStudent() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_ROLE') === 'STUDENT')
      return true;
    return false;
  }

}
