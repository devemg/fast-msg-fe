import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../../models/profile.model';
import { environment } from 'src/assets/environments/environment';
import { Contact } from '../../models/contact.model';
import { SesionService } from '../sesion/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private sesionService:SesionService
  ) { }

  /**
   * Obtiene el perfil del usuario
   */
  async getProfile(): Promise<Profile> {
    return this.http.get<Profile>(environment.ENDPOINT_USER + '?id='+this.sesionService.getUserID())
      .toPromise();
  }


  /**
   * Edita los datos del usuario
   * @param value 
   */
  async editUser(value): Promise<any> {
    return this.http.put(environment.ENDPOINT_USER + '?id='+this.sesionService.getUserID(), value)
      .toPromise();
  }

  /**
   * cambia la imagen del usuario
   * @param image 
   */
  async editImage(image): Promise<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<any>(`${environment.ENDPOINT_USER}/upload-image?id=${this.sesionService.getUserID()}`,formData)
    .toPromise();

  }

  /**
   * Obtiene la lista de contactos del usuario en sesion
   */
  async getContacts(): Promise<Contact[]> {
    return this.http.get<Contact[]>(environment.ENDPOINT_USER+'/contacts?id='+this.sesionService.getUserID()).toPromise();
  }

  /**
   * Busqueda de todos los usuarios por email
   * para agregar contacto
   * @param email 
   */
  async getContactsByEmail(email):Promise<Contact[]>{
    return this.http.post<Contact[]>(environment.ENDPOINT_USER+'/contacts/email',
    JSON.stringify({email}),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})}).toPromise();
  }

  /**
   * Busqueda de todos los usuarios por nombre
   * para agregar contacto
   * @param name 
   */
  async getContactsByName(name):Promise<Contact[]>{
    return this.http.post<Contact[]>(environment.ENDPOINT_USER+'/contacts/name',
    JSON.stringify({name}),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})}).toPromise();
  }

  /**
   * Agregar contacto a la lista del usuario en sesion
   * @param idContact 
   */
  async addContact(idContact):Promise<any>{
    return this.http.put<any>(environment.ENDPOINT_USER+'/contacts/add',
    JSON.stringify({idUser:this.sesionService.getUserID(),idContact}),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})}).toPromise();
  }

  /**
   * Eliminar contacto de la lista del usuario en sesion
   * @param idContact 
   */
  async deleteContact(idContact):Promise<any>{
    return this.http.put<any>(environment.ENDPOINT_USER+'/contacts/del',
    JSON.stringify({idUser:this.sesionService.getUserID(),idContact}),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})}).toPromise();
  }
  
}
