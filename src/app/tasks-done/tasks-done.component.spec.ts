import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDoneComponent } from './tasks-done.component';

describe('TasksDoneComponent', () => {
  let component: TasksDoneComponent;
  let fixture: ComponentFixture<TasksDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
