import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  get imgPath() {
    return 'assets/users/' + this.user.avatar;
  }
  // Event.
  @Output() selectUserEvent = new EventEmitter<User>();

  selectUserUser() {
    this.selectUserEvent.emit(this.user);
  }
  // Toggle class active.
  @Input({ required: true }) selectedUserId = '';
}
