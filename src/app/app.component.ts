import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { USERS } from './user/users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = USERS;
  // TASKS
  selectedUser?: User;
  selectedUserId = '';
  selectUserApp(user: User) {
    this.selectedUser = user;
    this.selectedUserId = this.selectedUser.id;
  }
}
