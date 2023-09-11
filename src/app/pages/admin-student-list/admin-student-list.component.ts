import { Component } from '@angular/core';
import { StudentRegisterDTO } from 'src/app/interfaces';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-student-list',
  templateUrl: './admin-student-list.component.html',
  styleUrls: ['./admin-student-list.component.css']
})
export class AdminStudentListComponent {
  public students: StudentRegisterDTO[] = [];
  constructor(
    private adminService: AdminService,
    private auth: AuthService,
    private alert: AlertService,
    private api: ApiService
  ) { }
  ngOnInit() {
    this.adminService.getAllStudents().subscribe(res => {
      this.students = res as any[];
    });
  }

  onDelete(Id: number) {
    // this.auth.deleteStudent(studentId, () => {
      
    //   this.alert.success('delete successful.');
    //   window.location.reload();
     
    // })
    this.api.delete(`/admin/delete-student/${Id}`).subscribe(res => {
      this.alert.success('delete successful.');
      window.location.reload();
      
      
    },this.alert.apiFail);
  }
}
