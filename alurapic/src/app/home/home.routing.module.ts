import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
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

