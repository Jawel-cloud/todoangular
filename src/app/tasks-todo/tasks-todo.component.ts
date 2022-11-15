import { TaskService } from './../Services/tasks.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Task } from '../Models/task';

@Component({
  selector: 'app-tasks-todo',
  templateUrl: './tasks-todo.component.html',
  styleUrls: ['./tasks-todo.component.scss'],
})
export class TasksTodoComponent implements OnInit {

  tasksToDo:Array<Task> = [];

  constructor(private taskservice: TaskService) {
    this.taskservice.getTaskListObs().subscribe((tasks: Array<Task>)=>{
      this.tasksToDo=tasks.filter(t=>t.isDone===false);
    })
  }

  ngOnInit(): void {
  }
  remove(task:Task){
    this.taskservice.remove(task);
  }
  clearAll(doneOrNo:boolean){
    this.taskservice.clearAll(doneOrNo);
  }
  done(task:Task){
    this.taskservice.done(task);
  }

  getColor():string{
    return this.tasksToDo.length>=3? 'white':'rgb(80, 205, 255)';
  }
}
