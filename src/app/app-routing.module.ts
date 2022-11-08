import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from './Componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './Componentes/componente-b/componente-b.component';

const routes: Routes = [
  {
    path: 'primera',
    component: ComponenteAComponent

  },
  {path:'segunda',
component:ComponenteBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
