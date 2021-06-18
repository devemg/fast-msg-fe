import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./modules/Public/public.module').then(m => m.PublicModule)
  },
  {
    path:'user',
    loadChildren: () => import('./modules/messages/messages.module').then(m => m.MessagesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
