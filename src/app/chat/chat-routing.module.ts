import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainChatComponent } from './components/main-chat/main-chat.component';
import { GuardChatRoutesService } from './services/guard-chat-routes/guard-chat-routes.service';


const routes: Routes = [
  {
    path: '',
    component: MainChatComponent,
    canActivate:[GuardChatRoutesService]
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
