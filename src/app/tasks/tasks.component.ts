import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  /* TypeScript shortcut : init taskService right in the constructor
    === private taskService: TasksService then in the constructor:
    this.taskService = TasksService (constructor param). 
    */
  /* Another way to implement a service: use Angular inject() fct.
    private taskService = inject(TasksService).
    Cf NewTaskComponent.
  */
  constructor(private taskService: TasksService) {}

  @Input({ required: true }) user!: any;

  // All current user's tasks.
  getTasksList(userId: string) {
    return this.taskService.getUserTasks(userId);
  }
  // Delete task.
  onDeleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }
  // Open | Close Add Task dialog
  isOpen = false;
  openAddTaskDialog() {
    this.isOpen = true;
  }
  closeAddTaskDialog() {
    this.isOpen = false;
  }

  // Add new Datas.
  onAddTask(datas: Task) {
    this.taskService.addTask(datas, this.user.id);
    this.closeAddTaskDialog();
  }
}
