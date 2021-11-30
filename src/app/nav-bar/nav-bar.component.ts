import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public loggedIn=false;
  user: any;

  constructor(private loginService: LoginService,) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
  }
  logOutUser(){
    this.loginService.logout();
    location.reload();
  }
  yesUser(){
    this.loginService.getUser();
    }

}
