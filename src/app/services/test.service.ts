import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';
import { TestDTO } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private api: ApiService,
    private alert: AlertService
  ) { }

  create(payload: TestDTO, callback?: () => void) {
    return this.api.post('/api/test/add', payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Test registration successful.')
      
    });
  }

  getAllTests() {
    return this.api.get(`/api/test/all`);
  }
  }