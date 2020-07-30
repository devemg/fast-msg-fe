import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../models/profile.model';
import { FormControl } from '@angular/forms';
import { ImgFile } from 'src/app/chat/models/ImgFile.model';
import { getUrlImage } from 'src/assets/scripts/extra-functions';
import { UserService } from 'src/app/chat/services/user/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  
  profile: Profile = new Profile('', '', '');
  selectedImage: ImgFile;
  name = new FormControl('');
  email = new FormControl('');
  
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.selectedImage = new ImgFile('../../../../../assets/img/backgrounds/mooning.png',null);
    this.getProfile();
  }

  /**
   * obtener el perfil
   */
  async getProfile() {
    this.profile = await this.userService.getProfile();
    this.selectedImage = new ImgFile(this.profile.image,null);
  }

  async editName(){
    if(this.name.valid){
      await this.userService.editUser({name:this.name.value})
      .then(res=>{
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }

  async editImage(){
    if(this.selectedImage.file){
      await this.userService.editImage(this.selectedImage.file)
      .then(res=>{
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }

  async editEmail(){
    if(this.email.valid){
      await this.userService.editUser({email:this.email.value})
      .then(res=>{
        console.log('exito',res)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }

      /**
   * permite subir la imagen
   * @param imageInput evento que contiene losr archivos
   */
  async processFile(imageInput: any) {
    var file:File = imageInput.target.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {

   this.selectedImage =new ImgFile( myReader.result.toString(),file);
  }
  myReader.readAsDataURL(file);
  }

  getUrlImageSelectable(content){
    if(this.selectedImage.file){
        return content;
    }else{
      return getUrlImage(content)
    }
  }


}
