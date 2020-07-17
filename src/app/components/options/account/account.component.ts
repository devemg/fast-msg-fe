import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  profile: Profile = new Profile('', '', '');
  selectedImage: string;

  constructor(
    private sesionService: SesionService
  ) { }

  ngOnInit(): void {
    this.selectedImage = '../../../../assets/img/mooning.png';
    this.getProfile();
  }

  async getProfile() {
    this.profile = await this.sesionService.getProfile();
    this.selectedImage = this.profile.image;
  }


      /**
   * permite subir la imagen
   * @param imageInput evento que contiene losr archivos
   */
  async processFile(imageInput: any) {
    var file:File = imageInput.target.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
   this.selectedImage = myReader.result.toString();
  }
  myReader.readAsDataURL(file);
  }



}
