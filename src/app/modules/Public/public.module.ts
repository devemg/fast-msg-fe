import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ConfirmAccountComponent } from './components/confirm-account/confirm-account.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HighlightComponent } from './components/landing-page/sections/highlight/highlight.component';
import { HomeComponent } from './components/landing-page/sections/home/home.component';
import { BannerComponent } from './components/landing-page/sections/banner/banner.component';
import { FooterInfoComponent } from './components/landing-page/sections/footer-info/footer-info.component';
import { OptionsComponent } from './components/landing-page/sections/options/options.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [
    LoginComponent, 
    LandingPageComponent, 
    RegisterComponent, 
    ResetPasswordComponent, 
    ConfirmAccountComponent, 
    ContactComponent, 
    MainPageComponent, 
    HomeComponent, 
    BannerComponent, 
    FooterInfoComponent, 
    HighlightComponent, OptionsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers:[{provide: MAT_DATE_LOCALE, useValue: 'es-ES'}]
})
export class PublicModule { }
