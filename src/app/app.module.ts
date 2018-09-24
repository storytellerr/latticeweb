import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { HttpClientModule } from '@angular/common/http';
import {GetBloodService} from './service/get-blood.service';
import { DragulaModule } from 'ng2-dragula';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule,
    HttpClientModule,
    DragulaModule.forRoot()
  ],
  providers: [GetBloodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
