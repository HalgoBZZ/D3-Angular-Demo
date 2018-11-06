import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { D3ScaleComponent } from './components/d3-scale/d3-scale.component';
import { routing } from './routing.module';
import { NvD3Module } from 'ngx-nvd3';
import 'd3';
// import 'nvd3';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    D3ScaleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
