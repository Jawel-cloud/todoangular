import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../Models/task";

@Injectable()
export class TaskService{

  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
      const taskList=[
        {name:'zerowe', end: new Date().toLocaleString(), deadline: 'Dec 31, 2999', isDone: true},
        {name:'pierwsze', deadline: 'Dec 31, 2999', isDone: false},
        {name:'drugie', deadline: 'Dec 31, 2999',  isDone: false},
        {name:'trzecie', deadline: 'Dec 31, 2999',  isDone: false},
        {name:'czwarte', deadline: 'Dec 31, 2999', isDone: false}
      ];
      this.taskListObs.next(taskList);
  }

  add(task:Task){
    const list = this.taskListObs.getValue();
    list.push(task);
    this.taskListObs.next(list);

  };
  remove(task:Task){
    const list = this.taskListObs.getValue().filter(e=>e!==task)
    this.taskListObs.next(list);
  }
  clearAll(doneOrNo){
    const list = this.taskListObs.getValue().filter(e=>e.isDone===doneOrNo)
    this.taskListObs.next(list);
  }
  done(task:Task){
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);

  }
  getTaskListObs():Observable<Array<Task>>{
    return this.taskListObs.asObservable();
  }
}


