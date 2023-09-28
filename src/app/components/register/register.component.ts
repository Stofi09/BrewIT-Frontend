import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = "";
  password = '';
  passwordAgain = "";
  hide = true;

  constructor( private authService: AuthService,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) { }

  onSubmit() {
    this.authService.register(this.username, this.email ,this.password).subscribe(
      response => {
        console.log('Register successful!', response);
        this.dialogRef.close(this.username);
      },
      error => {
        console.error('Registration failed!', error);
        console.error('Error details:', error.error);
      }
    );
  }
}