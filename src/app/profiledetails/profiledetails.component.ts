import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../profile';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfiledetailsComponent implements OnInit {

  empId!: number;
  profiles!: Profile;
  constructor(private route: ActivatedRoute,
    private profileservice: ProfileserviceService) { }

  ngOnInit(): void {
    this.empId=this.route.snapshot.params['empId'];
    this.profiles=new Profile();
    this.profileservice.findProfileById(this.empId).subscribe(data=>{
      this.profiles=data;
    });

  }

}
