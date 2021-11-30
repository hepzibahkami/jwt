import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { LoginComponent } from './login/login.component';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';
import { ProfileslistComponent } from './profileslist/profileslist.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path:'profile',component:ProfileslistComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'createprofile',component:CreateprofileComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'profiledetails/:empId',component:ProfiledetailsComponent},
  {path:'update-profile/:empId',component:UpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
