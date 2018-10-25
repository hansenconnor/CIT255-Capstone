import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
  // Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
  // Environment
import { environment } from '../environments/environment';
  // Observable
import { Observable } from 'rxjs';



import { routes } from './app.router';

// Angular Forms
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

// Root Component
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

// import {HeaderModule} from './shared/layout/header/header.module';
// import {HeaderComponent} from './shared/layout/header/header.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    routes,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- Debugging purposes only
    )
    // Other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
