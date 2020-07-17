import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainChatComponent } from './components/main-chat/main-chat.component';


const routes: Routes = [
  {
    path: '',
    component: MainChatComponent
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
