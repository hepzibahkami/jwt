import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {
  private baseUrl="http://localhost:8080/api/v1/profile";

  constructor(private httpclient: HttpClient) { }

  getProfileslist():Observable<Profile[]>{
    return this.httpclient.get<Profile[]>(`${this.baseUrl}`);
  }
  createProfiles(profile: Profile):Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`,profile);
  }
  findProfileById(empId: number): Observable<Profile>{
    return this.httpclient.get<Profile>(`${this.baseUrl}/${empId}`);
  }
  updateProfiles(empId:number,profile: Profile):Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}/${empId}`,profile);
  }
  deleteProfiles(empId: number):Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${empId}`,
    {responseType:'text'});


  }
}
