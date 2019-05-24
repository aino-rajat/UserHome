import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './authgaurd/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { ErrorInterceptor } from './helper/error.interceptor';
import { fakeBackendProvider } from './helper/fake-backend';

//Material inputs 
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatTooltipModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatListModule, MatInputModule, MatCheckboxModule }from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    MatButtonModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatTooltipModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatListModule, MatInputModule, MatCheckboxModule, 
    HttpClientModule

  ],
  entryComponents:[LoginComponent],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
