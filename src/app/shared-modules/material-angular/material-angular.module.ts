import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Angular Modules
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCardModule
  ]
})
export class MaterialAngularModule { }
