import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path:'user',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
