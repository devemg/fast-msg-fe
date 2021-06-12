import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Profile } from '../../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
   }



  /**
   * Obtiene el perfil del usuario
   */
  async getProfile(): Promise<Profile> {
    return new Promise((resolve,reject)=>{
      resolve({
        email:'invitado@fastmessages.com',
        image:'',
        name:'Invitado',
      });
    });
  }


  /**
   * Edita los datos del usuario
   * @param value 
   */
  async editUser(value): Promise<any> {
    return new Promise((resolve,reject)=>{
      resolve({
        email:'invitado@fastmessages.com',
        image:'',
        name:'Invitado',
      });
    });
  }

  /**
   * cambia la imagen del usuario
   * @param image 
   */
  async editImage(image): Promise<any> {
    const formData = new FormData();
    formData.append('image', image);
    return new Promise((resolve,reject)=>{
      resolve({
        email:'invitado@fastmessages.com',
        image:'',
        name:'Invitado',
      });
    });
  }

  /**
   * Obtiene la lista de contactos del usuario en sesion
   */
  async getContacts(): Promise<Contact[]> {
    return new Promise((resolve,reject)=>{
      resolve([]);
    });
  }

  /**
   * Busqueda de todos los usuarios por email
   * para agregar contacto
   * @param email 
   */
  async getContactsByEmail(email):Promise<Contact[]>{
    return new Promise((resolve,reject)=>{
      resolve([]);
    });
  }

  /**
   * Busqueda de todos los usuarios por nombre
   * para agregar contacto
   * @param name 
   */
  async getContactsByName(name):Promise<Contact[]>{
    return new Promise((resolve,reject)=>{
      resolve([]);
    });
  }

  /**
   * Agregar contacto a la lista del usuario en sesion
   * @param idContact 
   */
  async addContact(idContact):Promise<any>{
    return new Promise((resolve,reject)=>{
      resolve([]);
    });
  }

  /**
   * Eliminar contacto de la lista del usuario en sesion
   * @param idContact 
   */
  async deleteContact(idContact):Promise<any>{
    return new Promise((resolve,reject)=>{
      resolve([]);
    });
  }
  
}
