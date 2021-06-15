import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { MainChatComponent } from './components/main-chat/main-chat.component';
import { AccountComponent } from './components/options/account/account.component';
import { ListChatsComponent } from './components/options/list-chats/list-chats.component';
import { ListContactsComponent } from './components/options/list-contacts/list-contacts.component';
import { SettingsComponent } from './components/options/settings/settings.component';
import { MaterialAngularModule } from '../shared-modules/material-angular/material-angular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommunityComponent } from './components/community/community.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    ListContactsComponent,
    ChatComponent,
    MainChatComponent,
    ListChatsComponent,
    AccountComponent,
    SettingsComponent,
    CommunityComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatRoutingModule,
    MaterialAngularModule,
    LayoutModule 
  ]
})
export class ChatModule { }
