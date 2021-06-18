import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { MessagesRoutingModule } from './messages-routing.module';
import { CommunityComponent } from './components/community/community.component';
import { AccountComponent } from './components/account/account.component';
import { ContactChatListComponent } from './components/contact-chat-list/contact-chat-list.component';
import { MainChatComponent } from './components/main-chat/main-chat.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    HomeComponent,
    CommunityComponent,
    AccountComponent,
    ContactChatListComponent,
    MainChatComponent,
    ChatComponent
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
