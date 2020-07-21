import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PageComponent } from './components/page/page.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ConfirmAccountComponent } from './components/confirm-account/confirm-account.component';


@NgModule({
  declarations: [LoginComponent, PageComponent, RegisterComponent, ResetPasswordComponent, ConfirmAccountComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
