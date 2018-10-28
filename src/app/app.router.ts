import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProfileComponent } from "./components/profile/profile.component";

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
