import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Thrid Party
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { SignInRegisterComponent } from './SignInRegister/SignInRegister.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor, ErrorInterceptorProvider } from './_services/error.interceptor';
import { FriendoComponent } from './friendo/friendo.component';
import { BuddiesComponent } from './buddies/buddies.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';


@NgModule({
  declarations: [							
    AppComponent,
    ValueComponent,
      NavComponent,
      SignInRegisterComponent,
      HomeComponent,
      FriendoComponent,
      BuddiesComponent,
      MessagesComponent
   ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService, //for the authorisation purpose
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
