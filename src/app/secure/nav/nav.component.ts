import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() user!: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout().subscribe();
  }
}
