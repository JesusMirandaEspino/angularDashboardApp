import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../components-routing.module';
import { ChatComponent } from './chat/chat.component';




@NgModule({
  declarations: [
    MenuSideComponent,
    HeaderComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MenuSideComponent,
    HeaderComponent,
    ChatComponent
  ]
})
export class ShareModulesModule { }
