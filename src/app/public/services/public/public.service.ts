import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(
    private http:HttpClient
  ) { }

  login(values):Observable<Promise<any>>{
    return this.http.post<any>(`${environment.ENDPOINT_PUBLIC}/login`,JSON.stringify(values),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})})
  }

    register(values):Observable<any>{
    return this.http.post(`${environment.ENDPOINT_PUBLIC}/register`,JSON.stringify(values),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})})
  }


  contact(values){
    return this.http.post(`${environment.ENDPOINT_PUBLIC}/contact`,JSON.stringify(values),
    {headers:new HttpHeaders({ 'Content-Type':  'application/json'})})
  }
}
