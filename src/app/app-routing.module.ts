import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { ListadoComponent } from './listado/listado.component';
import { MadridComponent } from './madrid/madrid.component';
import { ToledoComponent } from './toledo/toledo.component';


const routes: Routes = [  {
  path: 'consulta',
  component: ConsultaComponent
},
{
  path: 'listado',
  component: ListadoComponent
},
{
  path: 'madrid',
  component: MadridComponent
},
{
  path: 'toledo',
  component: ToledoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
