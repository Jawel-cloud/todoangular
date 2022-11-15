import { TaskService } from './Services/tasks.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksTodoComponent } from './tasks-todo/tasks-todo.component';
import { TasksDoneComponent } from './tasks-done/tasks-done.component';
import { TaskDateDirective } from './Directives/task-date.directive';
import { TaskCompleteDirective } from './Directives/task-complete.directive';
import { TaskDisplayPipe } from './Pipes/task-display.pipe';
import { SortTasksPipe } from './Pipes/sort-tasks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TasksTodoComponent,
    TasksDoneComponent,
    TaskDateDirective,
    TaskCompleteDirective,
    TaskDisplayPipe,
    SortTasksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
