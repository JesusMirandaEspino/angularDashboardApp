import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../components-routing.module';




@NgModule({
  declarations: [
    MenuSideComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MenuSideComponent,
    HeaderComponent
  ]
})
export class ShareModulesModule { }
