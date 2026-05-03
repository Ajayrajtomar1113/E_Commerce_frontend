import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FeatureModule } from './Module/feature/feature-module';
import { SharedModule } from './Module/shared/shared-module';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}