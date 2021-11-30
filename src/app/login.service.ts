import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:8080";

  
  getUser(){
    return this.http.get(`${this.url}`);
  }

  

  constructor(private http:HttpClient, private router: Router) { }
  generateToken(Credentials:any){
    return this.http.post(`${this.url}/authenticate`,Credentials);

  }
  
  loginUser(token: any){
    localStorage.setItem("token",token);
    console.log(token);
    
    return true;
  }
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token===''|| token==null){
      return false;
    }
    else{
      return true;
    }
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);
    return true;
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
