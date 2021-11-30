import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import{Profile} from '../profile';
import {ProfileserviceService} from '../profileservice.service';
@Component({
  selector: 'app-profileslist',
  templateUrl: './profileslist.component.html',
  styleUrls: ['./profileslist.component.css']
})
export class ProfileslistComponent implements OnInit {
  profiles!: Profile[];
  p:number=1;
  firstname: any;
  data:any=[];
  
  
  

  constructor(private profileService: ProfileserviceService,private router: Router) { }

  ngOnInit(): void {
    this.getProfiles();
    

  }
  private getProfiles(){
    this.profileService.getProfileslist().subscribe(data =>{
      //this.totalLength=data.length;
      this.profiles=data;}
      );
  }
  updateProfiles(empId: number){
    this.router.navigate(['update-profile',empId]);
    
   
  }
  deleteProfiles(empId: number){
    this.profileService.deleteProfiles(empId).subscribe(data=>{
      console.log(data);
      this.getProfiles();
    });
  }
  profileDetails(empId: number){
    this.router.navigate(['profiledetails',empId]);
  }
  Search(){
    if(this.firstname==""){
      this.ngOnInit();
    }
    else{
      this.profiles=this.profiles.filter(res=>{
        return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
      })
    }
  }
  key: string='empId';
  reverse: boolean= false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }
  
}
