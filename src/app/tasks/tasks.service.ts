import { Injectable } from '@angular/core';
import { type Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this._tasks = JSON.parse(tasks);
    }
  }
  private _tasks = [
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
  private _saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }

  // All current user tasks.
  getUserTasks(userId: string) {
    return this._tasks.filter((task) => task.userId === userId);
  }
  // Add task.
  addTask(taskDatas: Task, userId: string) {
    taskDatas.userId = userId;
    this._tasks.unshift(taskDatas);
    this._saveTasks();
  }

  // Delete task.
  deleteTask(taskId: string) {
    this._tasks = this._tasks.filter((task) => task.id !== taskId);
    this._saveTasks();
  }
}
