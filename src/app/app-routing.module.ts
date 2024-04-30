import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { ShowUsersComponent } from './User/ShowUsers/showusers/showusers.component';
import { RegisterconfirmationComponent } from './User/registerconfirmation/registerconfirmation.component';
import { ProfileComponent } from './User/profile/profile.component';
const routes: Routes = [

{
  path:"",
  component:AllTemplateFrontComponent

},
{
  path:"login",
  component:LoginComponent

},
{
  path:"profile",
  component:ProfileComponent

},
{
  path:"register",
  component:RegisterComponent

},
{
  path:"confirmed",
  component:RegisterconfirmationComponent

},
{
  path:"show",
  component:ShowUsersComponent

},
{
  path:"admin",
  component:AllTemplateBackComponent

}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }