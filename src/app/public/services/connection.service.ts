import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(
    public http:HttpClient
  ) { }

  async login(values):Promise<any>{
    return await this.http.post(`${environment.ENDPOINT_PUBLIC}/login`,JSON.stringify(values),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})})
  }

  async register(values):Promise<any>{
    return await this.http.post(`${environment.ENDPOINT_PUBLIC}/register`,JSON.stringify(values),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})})
  }


  async contact(values):Promise<any>{
    return await this.http.post(`${environment.ENDPOINT_PUBLIC}/contact`,JSON.stringify(values),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})})
  }
}
