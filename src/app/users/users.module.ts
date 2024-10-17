import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMessagesComponent } from '../list-messages/list-messages.component';
import {ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from '../login/login.component';
import { MostrarComponent } from '../mostrar/mostrar.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ListMessagesComponent,
    LoginComponent,
    MostrarComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [

    ListMessagesComponent,
    LoginComponent,
    MostrarComponent
  ],
})
export class UsersModule { }
