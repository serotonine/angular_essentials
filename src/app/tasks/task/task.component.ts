import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // Complete.
  @Output() complete = new EventEmitter<string>();
  onComplete() {
    this.complete.emit(this.task.id);
  }
}
