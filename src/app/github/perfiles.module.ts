import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfiles-routing.module';
import { PerfilComponent } from './perfiles/perfiles.component';
// import { PerfilComponent } from './pages/perfil/perfil.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class PerfilModule { }
