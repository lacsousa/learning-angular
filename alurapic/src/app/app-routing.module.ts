import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(h=>h.HomeModule)
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photosListResolve: PhotoListResolver
    },
    data: {
      title: 'Timeline'
    }
  },

  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Photo Upload'
    }
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailsComponent,
    data: {
      title: 'Photo Details'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Page Not-Found'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
