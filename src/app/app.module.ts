import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {havyaComponent} from  './havya/havya.component';
import {serversComponent} from './servers/servers.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, havyaComponent, serversComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
