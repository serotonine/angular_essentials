import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // Cancel (close dialog).
  @Output() cancel = new EventEmitter();
  cancelAddTask() {
    this.cancel.emit();
  }
  // Add new Datas.
  @Output() addTask = new EventEmitter<Task>();
  newTask = {} as Task;
  onSubmit() {
    this.addTask.emit({
      id: new Date().getTime().toString(),
      userId: '',
      title: this.newTask.title,
      summary: this.newTask.summary,
      dueDate: this.newTask.dueDate,
    });
  }
}
