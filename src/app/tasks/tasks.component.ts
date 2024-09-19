import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  task = TaskComponent;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  @Input({ required: true }) user!: any;

  // All current user tasks.
  getTasksList(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  // Delete task.
  onDeleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
  // Open | Close Add Task dialog
  isOpen = false;
  openAddTaskDialog() {
    this.isOpen = true;
  }
  closeAddTaskDialog() {
    this.isOpen = false;
  }

  // @Output() addTask = new EventEmitter();
  // onAddTask(){
  //   this.onAddTask.emit()
  // }
}
