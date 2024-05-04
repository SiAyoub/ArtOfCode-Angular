import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/Services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  firstname: string | undefined;
  lastname: string | undefined;
  id:any;
   // Type this according to your profile data structure
  email: any;

  constructor(private profileService: ProfileService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let token = localStorage.getItem('access_token');
    console.log(token);
    this.profileService.getDataFromToken(token).subscribe(response => {
      console.log("user from token",response);

      // Extract first name, last name, and profile data from the response
  
    });
    this.route.paramMap.subscribe(params => {
      // Extract the ID parameter from the route
      this.id = params.get('id');
      this.profileService.getUserById(params.get('id')).subscribe(response => {
        console.log("user from id",response)
        this.firstname = response.firstname;
        this.lastname = response.lastname;
        this.email = response.email;
      })
    });

    console.log("id",this.id)
  }
}
