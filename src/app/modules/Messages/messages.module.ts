import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessagesRoutingModule,
    AngularMaterialModule,
    LayoutModule 
  ]
})
export class MessagesModule { }
