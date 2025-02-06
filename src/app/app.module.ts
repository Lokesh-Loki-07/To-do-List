import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { EditingComponent } from './editing/editing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UsersComponent,
    EditingComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    RouterLink

    
     
    // HttpClientModule,
     
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
