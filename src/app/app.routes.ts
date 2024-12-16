import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { GlobalViewComponent } from './global-view/global-view.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'login', component: AuthenticationComponent },
  { path: 'global-view', component: GlobalViewComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
