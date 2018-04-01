import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StressStudentTemplatesComponent } from './stress-student-templates.component';

describe('StressStudentTemplatesComponent', () => {
  let component: StressStudentTemplatesComponent;
  let fixture: ComponentFixture<StressStudentTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StressStudentTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StressStudentTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
