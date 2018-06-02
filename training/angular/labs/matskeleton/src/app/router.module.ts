import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const myRoutes: Routes = [
    { path : 'auth' , component : LoginComponent },
    { path : '' , redirectTo : '/auth', pathMatch : 'full' }
];

@NgModule({
 imports: [RouterModule.forRoot(myRoutes)],
 exports: [RouterModule]
})
export class RoutingModule { }
