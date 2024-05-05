import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/Services/profile.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  isMyprofile:boolean |undefined;
  isFollowing:boolean | undefined;
  loggedId:any;
  firstname: string | undefined;
  lastname: string | undefined;
  id: any;
  email: any;
  imgname: any;
  profilePhotoUrl: string | undefined;
  aboutme: any;
  phone: any;
  adress: any;
  dancepref: any;
  musicpref: any;
  will: any;
  facebooklink: any;
  githublink: any;
  instagramlink: any;
  phonenumber: any;
  followedUsers:any;
  suggestUsersImages: { [key: string]: string } = {}; // Store user images by user ID

  constructor(
    private profileService: ProfileService,
    private userService:UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient // Inject HttpClient module
  ) {}

  ngOnInit(): void {
    let token = localStorage.getItem('access_token');
    console.log(token);
    this.profileService.getDataFromToken(token).subscribe(response => {
      console.log("user from token", response);
      this.loggedId = response.id;
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        this.isMyprofile = (params.get('id') == response.id)
        this.userService.getUserFollowerUsers(response.id).subscribe(response=>{
            console.log("follow list ",response)
            this.followedUsers = response;
           response.forEach(user => {
              this.getfollowedProfilephoto(user); // Call getProfilephoto for each user
            });
           response.map(user=>{
            if(user.id == params.get("id"))
            {
              this.isFollowing = true;
            }
           })
           console.log("is following ?",this.isFollowing)


        })
        this.profileService.getUserById(params.get('id')).subscribe(response => {
          console.log("user from id", response);
          this.firstname = response.firstname;
          this.lastname = response.lastname;
          this.email = response.email;
          this.imgname = response.profile.profilephoto;
          this.getProfilephoto(this.imgname); // Call the function to fetch profile photo
          this.aboutme=response.profile.aboutMe;
          this.phone=response.profile.phonenumber;
          this.adress=response.profile.address;
          this.dancepref=response.profile.dancepref;
          this.musicpref=response.profile.musicpref;
          this.will=response.profile.will;
          this.facebooklink=response.profile.facebooklink;
          this.githublink=response.profile.githublink;
          this.instagramlink=response.profile.instagramlink;
        });
      });
    });
  
   

  }

  getProfilephoto(imgname: any): void {
    this.http.get(`http://localhost:8089/user/api/v1/auth/profile/profileimage/${imgname}`, { responseType: 'blob' })
      .subscribe((data: Blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.profilePhotoUrl = reader.result as string;
        };
        reader.readAsDataURL(data);
      });
  }
  public follow(): void {
    const currentUserId = this.loggedId;
   
      const userIdToFollow = this.id;
      console.log(currentUserId,userIdToFollow)
    this.userService.followUser(currentUserId,userIdToFollow).subscribe(
      (response) => {
        console.log(`User ${userIdToFollow} followed successfully.`);
        window.location.reload();

      },
      (error) => {
        console.error('Error unfollowing user:', error);
        // Handle error here
      }
    );
  
}
unfollow(): void {
  const currentUserId = this.loggedId; // Assuming you have the current user's ID stored in this.user.id
  const userIdToUnfollow =this.id; // Assuming you have the user ID of the follower/following to unfollow stored in userToUnfollow.id
  console.log(currentUserId,userIdToUnfollow)
  this.userService.unfollowUser(currentUserId, userIdToUnfollow).subscribe(
    (response) => {
      window.location.reload();
    },
    (error) => {
      console.error('Error unfollowing user:', error);
      // Handle error here
    }
  );
}
getfollowedProfilephoto(user: any): void {
  const id = user.id;
  this.http.get(`http://localhost:8089/user/api/v1/auth/profile/profileimageid/${id}`, { responseType: 'blob' })
    .subscribe((data: Blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.suggestUsersImages[id] = reader.result as string; // Store image URL for user ID
      };
      reader.readAsDataURL(data);
    });
}
clickfollowedUser(id:any):void{
this.router.navigate([`/myprofile/${id}`])
}
}
