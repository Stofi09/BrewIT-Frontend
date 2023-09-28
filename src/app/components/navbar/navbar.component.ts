import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() userLoggedIn = new EventEmitter<string>();
  isLoggedIn = false;

  constructor(
    public dialog: MatDialog,
    public userService: UserService
  ) {}

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.setUser(result);
      }
    });
  }

  logout() {
    this.isLoggedIn = false;
  }
}
