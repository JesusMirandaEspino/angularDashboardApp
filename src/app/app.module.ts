import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModuleModule } from './components/components-module.module';
import { ShareModulesModule } from './components/shared/share-modules.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModuleModule,
    ShareModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
