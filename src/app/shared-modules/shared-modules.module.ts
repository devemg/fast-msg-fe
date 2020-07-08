import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from './material-angular/material-angular.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MaterialAngularModule
  ]
})
export class SharedModulesModule { }
