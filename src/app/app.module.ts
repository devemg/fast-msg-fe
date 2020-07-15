import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { MainChatComponent } from './components/main-chat/main-chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModulesModule } from './shared-modules/shared-modules.module';
import { AccountComponent } from './components/options/account/account.component';
import { ListChatsComponent } from './components/options/list-chats/list-chats.component';
import { ListContactsComponent } from './components/options/list-contacts/list-contacts.component';
import { SettingsComponent } from './components/options/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    ChatComponent,
    MainChatComponent,
    ListChatsComponent,
    AccountComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
