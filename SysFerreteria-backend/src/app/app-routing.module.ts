import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Boleta/add/add.component';
import { ListarComponent } from './Boleta/listar/listar.component';
import { DetalleComponent } from './venta/detalle/detalle.component';
import { RegComponent } from './venta/reg/reg.component';
const routes: Routes = [
  {path:'all/boleta', component:ListarComponent},
  {path:'add/boleta', component:AddComponent},
  {path:'all/venta', component:DetalleComponent},
  {path:'add/venta', component:RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
