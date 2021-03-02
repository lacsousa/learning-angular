import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: SignInComponent,
        data: {
          title: 'Sign In'
        }
      },
      {
        path: 'signup',
        component: SignUpComponent,
        data: {
          title: 'Sign Up'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // usa forChild pq será carregado pelo módulo pai
                                            // no LazyLoading
  exports: [RouterModule]
})
export class HomeRoutingModule { }

