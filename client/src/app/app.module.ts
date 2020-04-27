import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layouts/layout/layout.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { MainComponent } from './components/layouts/main/main.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BooksComponent } from './components/pages/books/books.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AuthComponent } from './components/pages/auth/auth.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { LogoutComponent } from './components/pages/auth/logout/logout.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BooksComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
