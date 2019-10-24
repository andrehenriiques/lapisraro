import { SobreComponent } from './sobre/sobre.component';
import { PlanosComponent } from './planos/planos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'planos', component: PlanosComponent },
  { path: 'sobre', component: SobreComponent},
  { path: '', component: PlanosComponent },
  { path: '**', component: PlanosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
