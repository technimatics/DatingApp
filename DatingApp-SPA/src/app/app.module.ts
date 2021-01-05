import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { SignInRegisterComponent } from './SignInRegister/SignInRegister.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [			
    AppComponent,
    ValueComponent,
      NavComponent,
      SignInRegisterComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService //for the authorisation purpose
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
