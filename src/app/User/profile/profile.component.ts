// profile.component.ts

import { Component,OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/profile.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
isMusicSelected: any;
ngOnInit():void{
  
 let token = localStorage.getItem('access_token')
 console.log(token)
this.profileService.getDataFromToken(token).subscribe(response=>{

  console.log(response)
}
)
}
toggleMusicIcon() {
throw new Error('Method not implemented.');
}
isDanceSelected: any;
toggleDanceIcon() {
throw new Error('Method not implemented.');
}
isWillSelected: any;
toggleWillIcon() {
throw new Error('Method not implemented.');
}
selectOption(arg0: string) {
throw new Error('Method not implemented.');
}
  selectedFile: File | undefined;
  previewImageUrl: string | ArrayBuffer | null = null;
  musicPrefInput: string | undefined;
  danceMusicPrefInput: string | undefined;
  willInput: string | undefined;
  aboutMeInput: string | undefined;

  constructor(private profileService: ProfileService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;

    // Preview image
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (!this.selectedFile || !this.musicPrefInput || !this.danceMusicPrefInput || !this.willInput || !this.aboutMeInput) {
      return; // Validation failed
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('musicpref', this.musicPrefInput);
    formData.append('dancemusicpref', this.danceMusicPrefInput);
    formData.append('will', this.willInput);
    formData.append('aboutMe', this.aboutMeInput);

    this.profileService.addProfile(formData).subscribe(
      response => {
        console.log('Profile added successfully:', response);
        // Reset form fields and preview image
        this.resetForm();
      },
      error => {
        console.error('Error adding profile:', error);
        // Handle error
      }
    );
  }

  resetForm() {
    this.selectedFile = undefined;
    this.previewImageUrl = null;
    this.musicPrefInput = undefined;
    this.danceMusicPrefInput = undefined;
    this.willInput = undefined;
    this.aboutMeInput = undefined;
    const isMusicSelected  = undefined;
  const isDanceSelected = false;
  const isWillSelected = false;
  this.willInput= undefined;
  }
}


