import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//Thrid Party
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { SignInRegisterComponent } from './SignInRegister/SignInRegister.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor, ErrorInterceptorProvider } from './_services/error.interceptor';

@NgModule({
  declarations: [			
    AppComponent,
    ValueComponent,
      NavComponent,
      SignInRegisterComponent,
      HomeComponent
   ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService, //for the authorisation purpose
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
