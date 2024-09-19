import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  get imgPath() {
    return 'assets/users/' + this.user.avatar;
  }
  // Event.
  @Output() selectUserEvent = new EventEmitter<{}>();

  selectUserUser() {
    this.selectUserEvent.emit(this.user);
  }
}
