import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { LoadingBar2Component } from './loading-bar2/loading-bar2.component';

import { NgProgressModule } from 'ng2-progressbar';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoadingBarComponent,
    LoadingBar2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgProgressModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
