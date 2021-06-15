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
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core'; 
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
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatDialogModule,
    MatPaginatorModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatMenuModule,
    MatRippleModule
  ]
})
export class AngularMaterialModule { }
