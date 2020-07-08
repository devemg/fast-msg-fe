import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { ChatComponent } from './components/chat/chat.component';
import { MainChatComponent } from './components/main-chat/main-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    ChatComponent,
    MainChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
