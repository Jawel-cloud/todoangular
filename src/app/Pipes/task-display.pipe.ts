import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskDisplay'
})
export class TaskDisplayPipe implements PipeTransform {

  transform(value: string, args: string =''): unknown {
    return value.charAt(0).toLocaleUpperCase() + value.slice(1) + args;
  }

}
