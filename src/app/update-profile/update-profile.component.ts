import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../profile';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  profiles: Profile= new Profile();
  empId!: number;
  
  
  constructor(private profileservice: ProfileserviceService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.empId=this.route.snapshot.params['empId'];
    this.profileservice.findProfileById(this.empId).subscribe(data=>{
      this.profiles=data;
    },error=> console.log(error));
  }
  onSubmit(){
    this.profileservice.updateProfiles(this.empId,this.profiles).subscribe(data=>{
      this.goToProfileList();
    }, error=>console.log(error));
    }
  goToProfileList(){
    this.router.navigate(['/profile']);
   
  }

}


