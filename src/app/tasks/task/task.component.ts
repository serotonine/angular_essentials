import { Component, Input, Inject, inject } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  tasksService = inject(TasksService);
  @Input({ required: true }) task!: Task;

  // Complete.
  onComplete() {
    this.tasksService.deleteTask(this.task.id);
  }
}
