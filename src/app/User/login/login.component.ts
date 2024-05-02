import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { UserAuthService } from 'src/app/Services/user-auth.service'; // Import the UserAuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;
  error:string |undefined;
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService, // Inject the UserAuthService
    private router:Router,
    
  ) { }

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        // Store authentication response in local storage using UserAuthService
        this.userAuthService.setAuthenticationResponse(response);
        console.log("Login successful",response);;
        // Optionally, you can navigate to another page upon successful login
        const role = response.role;
        if (role==='ADMIN'){
          this.router.navigate(['/admin'])
        }
        else{
          this.router.navigate(["/"])
        }
      },
      (error) => {
        console.log("Login failed", error.error.error);
        this.error= error.error.error
        // Handle login failure, e.g., display error message to the user
      }
    );
  }
}
