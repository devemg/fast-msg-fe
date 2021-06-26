import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./modules/Public/public.module').then(m => m.PublicModule),
  },
  {
    path:'user',
    loadChildren: () => import('./modules/messages/messages.module').then(m => m.MessagesModule),
    canLoad: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
