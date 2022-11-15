import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Models/task';

@Pipe({
  name: 'sortTasks'
})
export class SortTasksPipe implements PipeTransform {

  transform(value: Array<Task>, ...args: unknown[]): Array<Task> {
    return value.sort((a,b)=>{
      if(a.deadline>b.deadline){return 1}
      else return -1;
    });
  }

}
