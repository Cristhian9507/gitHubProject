import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'github',
    loadChildren: () => import('./github/perfiles.module').then(m => m.PerfilModule),
  },
  {
    path: '**',
    redirectTo: 'github'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
