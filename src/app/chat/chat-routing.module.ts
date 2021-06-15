import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainChatComponent } from './components/main-chat/main-chat.component';
import { CommunityComponent } from './components/community/community.component';


const routes: Routes = [
  {
    path: '',
    component: MainChatComponent,
    children: [
      {
        path:'community',
        component: CommunityComponent
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
export class ChatRoutingModule { }
