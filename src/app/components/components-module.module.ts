import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModulesModule } from './shared/share-modules.module';
import { PrincipalDahsboardComponent } from './principal-dahsboard.component';




@NgModule({
  declarations: [
    PrincipalDahsboardComponent
  ],
  imports: [
    CommonModule,
    ShareModulesModule
  ],
  exports: [
    PrincipalDahsboardComponent
  ]
})
export class ComponentsModuleModule { }
