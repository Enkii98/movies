import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: 'card', component:CardComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
