import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(
    private http:HttpClient
  ) { }

  getUserID(){
    return "5f13218c8cb953232d4c4af0";
  }

  async getProfile():Promise<Profile> {
   return this.http.get<Profile>('http://localhost:8080/user?id=5f13218c8cb953232d4c4af0')
   .toPromise();
  }

}
