import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  usernameInput: string = '';
  suggestedUsers: any[] = [];
  suggestUsersImages: { [key: string]: string } = {};

  constructor(private http: HttpClient,private router:Router) { }

  async handleUsernameInputChange(event: any): Promise<void> {
    this.usernameInput = event.target.value;
    if (this.usernameInput.length > 0) {
      try {
        const users = await this.http.get<any[]>(
          `http://localhost:8089/user/api/v1/auth/getUserByUsername?start=${this.usernameInput}`
        ).toPromise();
        console.log(users)
        if (users) {
          this.suggestedUsers = users;
          // this.suggestedUsers.forEach(user => {
          //   this.getUserImage(user._id);
          // });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      this.suggestedUsers = [];
    }
  }

  // async getUserImage(id: string): Promise<void> {
  //   try {
  //     const response = await this.http.get(
  //       `https://esprit-compass-backend.vercel.app/user/get-image?id=${id}`,
  //       { responseType: 'blob' }
  //     ).toPromise();
  //     const imageUrl = URL.createObjectURL(response);
  //     this.suggestUsersImages[id] = imageUrl;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  clickUser(user: any): void {
    console.log(user);
    this.router.navigate([`/myprofile/${user.id}`]);
  }
}
