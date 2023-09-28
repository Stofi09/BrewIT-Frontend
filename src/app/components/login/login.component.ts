import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username = '';
  password = '';
  hide = true;

  constructor( private authService: AuthService,
    private dialogRef: MatDialogRef<LoginComponent>
  ) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful!', response);
        this.dialogRef.close(this.username);
      },
      error => {
        console.error('Login failed!', error);
        console.error('Error details:', error.error);
      }
    );
  }
}