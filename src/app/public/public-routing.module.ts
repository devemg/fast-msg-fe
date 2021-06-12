import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ConfirmAccountComponent } from './components/confirm-account/confirm-account.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


const routes: Routes = [
  {
    path:'',
        component: MainPageComponent,
        children: [
          {
            path:'',
            component:LandingPageComponent
          },
          {
            path:'login',
            component:LoginComponent
          },
          {
            path:'register',
            component:RegisterComponent
          },
          {
            path:'contact',
            component:ContactComponent
          },
          {
            path:'reset-password',
            component:ResetPasswordComponent
          },
          {
            path:'confirm-account/:id',
            component:ConfirmAccountComponent
          }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
