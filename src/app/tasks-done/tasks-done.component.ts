import { TaskService } from './../Services/tasks.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../Models/task';

@Component({
  selector: 'app-tasks-done',
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.scss']
})
export class TasksDoneComponent implements OnInit {

  tasksDone: Array<Task>=[];

  constructor(private taskservice: TaskService) {
    this.taskservice.getTaskListObs().subscribe((tasks: Array<Task>)=>{
      this.tasksDone=tasks.filter(t=>t.isDone===true);
      console.log(this.tasksDone)
    })
  }

  ngOnInit(): void {
  }

  remove(task:Task){
    this.taskservice.remove(task);
  }
  clearAll(doneOrNo: boolean){
    this.taskservice.clearAll(doneOrNo);
  }

}
