import { TaskService } from './../Services/tasks.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../Models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  newDate:Date;
  newTask:string;
  addingVisibility=false;

  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
  }

  switchAddingVisibility(){
    this.addingVisibility = !this.addingVisibility;
    this.newTask = '';
    this.newDate = null;
    console.log(this.newTask)
  }
  add(){
    const task:Task = ({name: this.newTask, deadline: this.newDate, isDone: false})
    this.taskservice.add(task);
    this.newTask = '';
    this.newDate = null;
  }

}

