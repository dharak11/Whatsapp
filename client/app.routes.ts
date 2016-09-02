import { RouterConfig, provideRouter } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { SignupComponent } from './imports/signup/signup.component';
import { LoginComponent } from './imports/login/login.component';
import { UserListComponent } from './imports/user-list/user-list.component';
import { UserDetailComponent } from './imports/user-detail/user-detail.component';
const routes: RouterConfig = [
  { path: '', component:  LoginComponent},
  { path: 'signup', component:  SignupComponent},
  { path:'users', component:UserListComponent ,canActivate: ['CanActivateForLoggedIn'] },
  { path:'userdetail/:id' ,component:UserDetailComponent,canActivate: ['CanActivateForLoggedIn'] }
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  { provide: 'CanActivateForLoggedIn', useValue: () => !! Meteor.userId() }
];
 
 
 