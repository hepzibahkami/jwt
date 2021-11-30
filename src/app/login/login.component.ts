import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Credentials={
    username:' ',
    password:' '
  }

  constructor( 
    
    
    private loginService:LoginService, private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    //console.log("submitted the form");
    if ((this.Credentials.username!=' ' && this.Credentials.password!=' ')&&
     (this.Credentials.username!=null && this.Credentials.password!=null)){
       console.log("submit the form");
       this.loginService.generateToken(this.Credentials).subscribe(
         (response: any)=>{
           
           console.log(response);
           console.log("token");
           
           this.loginService.loginUser(response.token);
           window.location.href="/profile";
           //this.route.navigate(["/profile"]);
           

         },
         error=>{
           console.log(error);
           
         });
        
       

      
    }
    else{
      console.log("fields are empty");
      
    }
    
  }
  

}
