import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  page = 1;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.userService.all(this.page).subscribe((response: any) => {
      this.users = response.data;
    })
  }

  nextPage(): void {
    this.page++;
    this.load();
  }
}
