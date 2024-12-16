import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { AuthenticationComponent } from './app/authentication/authentication.component';
import { SearchComponent } from './app/search/search.component';
import { PurchaseComponent } from './app/purchase/purchase.component';
import { ProfileComponent } from './app/profile/profile.component';
import { ContactComponent } from './app/contact/contact.component';
import { GlobalViewComponent } from './app/global-view/global-view.component';
import { DetailComponent } from './app/detail/detail.component'; // Import the DetailComponent

// Define your application routes
const routes: Routes = [
  { path: 'login', component: AuthenticationComponent },
  { path: 'global-view', component: GlobalViewComponent },
  { path: 'detail/:id', component: DetailComponent }, // Dedicated route for car details
  { path: 'search', component: SearchComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];

// Bootstrap the application with required providers
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Routing setup
    provideHttpClient(),   // HTTPClient for services
  ],
}).catch(err => console.error('Error bootstrapping application:', err));
