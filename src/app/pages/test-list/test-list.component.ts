import { Component } from '@angular/core';
import { TestDTO } from 'src/app/interfaces';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent {
  public tests: TestDTO[] = [];
  constructor(
    private testService: TestService
  ) { }
  ngOnInit() {
    this.testService.getAllTests().subscribe(res => {
      this.tests = res as any[];
    });
  }

}
