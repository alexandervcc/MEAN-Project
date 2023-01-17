import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprobanteComponent } from './comprobante/comprobante.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { LoginComponent } from './login/login.component';
import { TableComprobantComponent } from './table-comprobant/table-comprobant.component';
import { TableRegisterComponent } from './table-register/table-register.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: FormRegistroComponent},
  {path:'registro-comprobante', component: ComprobanteComponent},
  {path:'comprobante', component: TableComprobantComponent},
  {path:'login', component: LoginComponent},
  {path:'Registro', component: TableRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
