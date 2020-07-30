import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/assets/environments/environment';
import { Contact } from '../../models/contact.model';
import { SesionService } from '../sesion/sesion.service';
import { getHttpHeaders } from 'src/assets/scripts/extra-functions';
import { Profile } from '../../models/profile.model';

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
    return this.http.get<Profile>(environment.ENDPOINT_USER,getHttpHeaders(this.sesionService))
      .toPromise();
  }


  /**
   * Edita los datos del usuario
   * @param value 
   */
  async editUser(value): Promise<any> {
    return this.http.put(environment.ENDPOINT_USER, value,getHttpHeaders(this.sesionService.getToken()))
      .toPromise();
  }

  /**
   * cambia la imagen del usuario
   * @param image 
   */
  async editImage(image): Promise<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<any>(`${environment.ENDPOINT_USER}/upload-image`,formData,
    getHttpHeaders(this.sesionService.getToken()))
    .toPromise();
  }

  /**
   * Obtiene la lista de contactos del usuario en sesion
   */
  async getContacts(): Promise<Contact[]> {
    return this.http.get<Contact[]>(environment.ENDPOINT_USER+'/contacts',
    getHttpHeaders(this.sesionService.getToken())).toPromise();
  }

  /**
   * Busqueda de todos los usuarios por email
   * para agregar contacto
   * @param email 
   */
  async getContactsByEmail(email):Promise<Contact[]>{
    return this.http.post<Contact[]>(environment.ENDPOINT_USER+'/contacts/email',
    JSON.stringify({email}),
    getHttpHeaders(this.sesionService.getToken())).toPromise();
  }

  /**
   * Busqueda de todos los usuarios por nombre
   * para agregar contacto
   * @param name 
   */
  async getContactsByName(name):Promise<Contact[]>{
    return this.http.post<Contact[]>(environment.ENDPOINT_USER+'/contacts/name',
    JSON.stringify({name}),getHttpHeaders(this.sesionService.getToken())).toPromise();
  }

  /**
   * Agregar contacto a la lista del usuario en sesion
   * @param idContact 
   */
  async addContact(idContact):Promise<any>{
    return this.http.put<any>(environment.ENDPOINT_USER+'/contacts/add',
    JSON.stringify({idContact}),
    getHttpHeaders(this.sesionService.getToken())).toPromise();
  }

  /**
   * Eliminar contacto de la lista del usuario en sesion
   * @param idContact 
   */
  async deleteContact(idContact):Promise<any>{
    return this.http.put<any>(environment.ENDPOINT_USER+'/contacts/del',
    JSON.stringify({idContact}),
    getHttpHeaders(this.sesionService.getToken())).toPromise();
  }
  
}
