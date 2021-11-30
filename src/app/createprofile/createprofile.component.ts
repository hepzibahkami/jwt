import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../profile';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {
  profiles: Profile=new Profile();
  constructor(private profileservice: ProfileserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  saveProfile(){
    this.profileservice.createProfiles(this.profiles).subscribe(data =>{
      console.log(data);
      this.goToProfileList();
    },
    error=> console.log(error));
  }
  goToProfileList(){
    this.router.navigate(['/profile']);
  }
  onSubmit(){
    console.log(this.profiles);
    this.saveProfile();
  }

}
