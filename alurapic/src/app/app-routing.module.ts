import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpComponent } from './home/signup/signup.component';

const routes: Routes = [
  { path: '',
    component: SignInComponent,
    canActivate: [AuthGuard]
  },
  { path: 'signup',
    component: SignUpComponent
  },
  { path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photosListResolve: PhotoListResolver
    }
  },

  { path: 'p/add',
    component: PhotoFormComponent
  },

  { path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
