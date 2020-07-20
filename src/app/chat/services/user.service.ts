import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT_USER } from 'src/app/global-setting';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  async getProfile(): Promise<Profile> {
    return this.http.get<Profile>(ENDPOINT_USER + '?id=5f13218c8cb953232d4c4af0')
      .toPromise();
  }


  async editUser(value): Promise<any> {
    return this.http.put(ENDPOINT_USER + '?id=5f13218c8cb953232d4c4af0', value)
      .toPromise();
  }

  async editImage(image): Promise<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<any>(`${ENDPOINT_USER}/upload-image?id=5f13218c8cb953232d4c4af0`,formData)
    .toPromise();

    }

}
