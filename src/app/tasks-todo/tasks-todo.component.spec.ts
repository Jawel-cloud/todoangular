import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTodoComponent } from './tasks-todo.component';

describe('TasksTodoComponent', () => {
  let component: TasksTodoComponent;
  let fixture: ComponentFixture<TasksTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
