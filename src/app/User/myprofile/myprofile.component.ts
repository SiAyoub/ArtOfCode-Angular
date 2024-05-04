import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/Services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
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

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient // Inject HttpClient module
  ) {}

  ngOnInit(): void {
    let token = localStorage.getItem('access_token');
    console.log(token);
    this.profileService.getDataFromToken(token).subscribe(response => {
      console.log("user from token", response);
    });

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
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
}
