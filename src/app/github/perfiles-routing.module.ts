import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfiles/perfiles.component';
import { NotFoundComponent } from '../shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PerfilComponent },
      // { path: 'perfiles', component: PerfilComponent },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
