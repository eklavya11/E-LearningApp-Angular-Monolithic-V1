import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewCourseComponent } from './admin-new-course.component';

describe('AdminNewCourseComponent', () => {
  let component: AdminNewCourseComponent;
  let fixture: ComponentFixture<AdminNewCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
