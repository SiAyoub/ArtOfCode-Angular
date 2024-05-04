import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { NavebarBackComponent } from './BackOffice/navebar-back/navebar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShowUsersComponent } from './User/ShowUsers/showusers/showusers.component';
import { RegisterconfirmationComponent } from './User/registerconfirmation/registerconfirmation.component';
import { ProfileComponent } from './User/profile/profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyprofileComponent } from './User/myprofile/myprofile.component';
import { UserSearchComponent } from './User/user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    SidebarBackComponent,
    NavebarBackComponent,
    AllTemplateFrontComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    HomeFrontComponent,
    LoginComponent,
    ShowUsersComponent,
    RegisterComponent,
    RegisterconfirmationComponent,
    ProfileComponent,
    MyprofileComponent,
    UserSearchComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    BrowserAnimationsModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  // Add CUSTOM_ELEMENTS_SCHEMA to the schemas array
  ],
})
export class AppModule { }
