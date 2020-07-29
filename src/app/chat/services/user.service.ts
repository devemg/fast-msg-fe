import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../models/profile.model';
import { environment } from 'src/assets/environments/environment';
import { Contact } from '../models/contact.model';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private sesionService:SesionService
  ) { }

  async getProfile(): Promise<Profile> {
    return this.http.get<Profile>(environment.ENDPOINT_USER + '?id=5f13218c8cb953232d4c4af0')
      .toPromise();
  }


  async editUser(value): Promise<any> {
    return this.http.put(environment.ENDPOINT_USER + '?id=5f13218c8cb953232d4c4af0', value)
      .toPromise();
  }

  async editImage(image): Promise<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<any>(`${environment.ENDPOINT_USER}/upload-image?id=5f13218c8cb953232d4c4af0`,formData)
    .toPromise();

  }

  async getContacts(): Promise<Contact[]> {
    return this.http.get<Contact[]>(environment.ENDPOINT_USER+'/contacts?id='+this.sesionService.getUserID()).toPromise();
  }

  async getContactsByEmail(email):Promise<Contact[]>{
    return this.http.post<Contact[]>(environment.ENDPOINT_USER+'/contacts/email',
    JSON.stringify({email}),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})}).toPromise();
  }

  async getContactsByName(name):Promise<Contact[]>{
    return this.http.post<Contact[]>(environment.ENDPOINT_USER+'/contacts/name',
    JSON.stringify({name}),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})}).toPromise();
  }

  async addContact(idContact):Promise<any>{
    return this.http.put<any>(environment.ENDPOINT_USER+'/contacts/add',
    JSON.stringify({idUser:this.sesionService.getUserID(),idContact}),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})}).toPromise();
  }

  async deleteContact(idContact):Promise<any>{
    return this.http.put<any>(environment.ENDPOINT_USER+'/contacts/del',
    JSON.stringify({idUser:this.sesionService.getUserID(),idContact}),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})}).toPromise();
  }
  
}
