import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './../../components/main/main.component';
import { NotFoundComponent } from './../../components/not-found/not-found.component';
import { ProtectedComponent } from './../../components/protected/protected.component';
import { LoginComponent } from './../../components/login/login.component';
import { SignupComponent } from './../../components/signup/signup.component';

const routes: Routes = [
  { path: 'notfound', component: NotFoundComponent},
  { path: 'home', component: MainComponent},
  { path: 'restricted', component: ProtectedComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/notfound',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    MainComponent,
    NotFoundComponent,
    ProtectedComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
