import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AccountComponent } from './components/account/account.component';
import { CommunityComponent } from './components/community/community.component';
import { HomeComponent } from './components/home/home.component';
import { MainChatComponent } from './components/main-chat/main-chat.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'',
        component: CommunityComponent
      },
      {
        path:'community',
        component: CommunityComponent
      },
      {
        path:'contacts',
        component: CommunityComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'chat',
        component: MainChatComponent
      }
    ]
  },
  {
    path: '***',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
