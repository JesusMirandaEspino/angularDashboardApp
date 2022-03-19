import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModulesModule } from './shared/share-modules.module';
import { PrincipalDahsboardComponent } from './principal-dahsboard.component';
import { MenuSideComponent } from './shared/menu-side/menu-side.component';




@NgModule({
  declarations: [
    PrincipalDahsboardComponent
  ],
  imports: [
    CommonModule,
    ShareModulesModule
  ],
  exports: [
    PrincipalDahsboardComponent,
    MenuSideComponent
  ]
})
export class ComponentsModuleModule { }
