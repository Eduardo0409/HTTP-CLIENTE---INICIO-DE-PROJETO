import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, 
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ],
  providers: [

  ],
})
export class AppModule { }