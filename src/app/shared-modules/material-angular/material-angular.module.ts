import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Angular Modules
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialAngularModule { }
