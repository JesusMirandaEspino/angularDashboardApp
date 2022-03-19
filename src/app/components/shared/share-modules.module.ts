import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSideComponent } from './menu-side/menu-side.component';



@NgModule({
  declarations: [
    MenuSideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuSideComponent
  ]
})
export class ShareModulesModule { }
